import * as vscode from "vscode";
import * as fs from 'fs';
import * as path from 'path'

export class SidebarProvider implements vscode.WebviewViewProvider {
  _view?: vscode.WebviewView;
  _doc?: vscode.TextDocument;

  constructor(private readonly _extensionUri: vscode.Uri) {
    vscode.window.onDidChangeActiveTextEditor(() => {
      this.onActiveEditorChanged()
    }
    );

    vscode.workspace.onDidSaveTextDocument(() => this.onActiveEditorChanged());
    vscode.workspace.onDidCloseTextDocument(() => this.onActiveEditorChanged());
  }

  public resolveWebviewView(webviewView: vscode.WebviewView) {
    this._view = webviewView;

    webviewView.webview.options = {
      // Allow scripts in the webview
      enableScripts: true,

      localResourceRoots: [this._extensionUri],
    };

    webviewView.onDidChangeVisibility(() => {
      this.onActiveEditorChanged()
    })


    webviewView.webview.onDidReceiveMessage(async (data) => {
      const json = data.objjson
      const openFiles = vscode.workspace.textDocuments
      if (data.json) {
        openFiles.forEach(element => {
          if (element.languageId === 'json') {
          let data = fs.readFileSync(element.fileName)
          if (data.toString() !== "") {
            const jsonData = JSON.parse(data.toString())
            const fileNameWE = path.basename(element.fileName)
            const extension = path.extname(element.fileName)
            const fileName = path.basename(fileNameWE, extension)
            const value = json[fileName]
            const diff = this.getDiffOfJsons(value, jsonData)
            if (Object.keys(diff).length !== 0) {
              for (let diffKey in diff) {
                if (diff[diffKey] == undefined) {
                  delete value.diffKey
                }
                else 
                  value[diffKey] = diff[diffKey]
              }
              let finalObject = {}
              finalObject = value   
              this.createFiles(element.fileName, "", JSON.stringify(finalObject, undefined, 2))
            }
          }
        }
      });
    }
  });
    webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
  }

  public revive(panel: vscode.WebviewView) {
    this._view = panel;
  }

  private createFiles(path: any, fileName: string, data: any) {
    fs.writeFile(path+'/'+fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log('Success');
    });
  }


  private getDiffOfJsons(obj1: Object, obj2: Object) : Object {
    let result = {}
    for (let key in obj1) {
      if (key in obj2) {
        if (obj2[key] !== obj1[key]) {
          result[key] = obj1[key]
        }
      } else {
        result[key] = obj1[key] 
      }
    }
    if (Object.keys(obj2).length > Object.keys(obj1).length) {
      for (let key in obj2) {
        if (!(key in obj1)) {
          result[key] = undefined
        }
      }
    }
    return result
  }

  private onActiveEditorChanged(): void {
    if (vscode.workspace.textDocuments.length !== 0) {
      const openFiles = vscode.workspace.textDocuments
      let finalObject : Object = {}
      let buildObject = {}
      openFiles.forEach(element => {
        if (element.languageId == 'json') {
          let data = fs.readFileSync(element.fileName)
          const fileNameWE = path.basename(element.fileName)
          const extension = path.extname(element.fileName)
          const fileName = path.basename(fileNameWE, extension)
          buildObject[fileName] = JSON.parse(data.toString())
          finalObject = {...finalObject, ...buildObject}
        }
      });
      if (Object.keys(finalObject).length !==0) {
        const json : string = JSON.stringify(finalObject)
        if (this._view)
          this._view.webview.postMessage({ json: json });
      }
    }
  }

  private getDataForSheet() : string {
    if (vscode.workspace.textDocuments.length !== 0) {
      const openFiles = vscode.workspace.textDocuments
      let finalObject : Object = {}
      let buildObject : Object = {}
      openFiles.forEach(element => {
        if (element.languageId === 'json') {
          let data = fs.readFileSync(element.fileName)
          const fileNameWE = path.basename(element.fileName)
          const extension = path.extname(element.fileName)
          const fileName = path.basename(fileNameWE, extension)
          buildObject[fileName] = JSON.parse(data.toString())
          finalObject = {...finalObject, ...buildObject}
        }
      });
      if (Object.keys(finalObject).length !== 0) {
        const json : string = JSON.stringify(finalObject)
        return json
      }
    }
    return "{}"
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    const styleResetUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "reset.css")
    );

    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "index.umd.js")
    );
    const styleMainUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "index.css")
    );

    const mainScriptPathOnDisk = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "sideBar.js")
    );

    // Use a nonce to only allow a specific script to be run.
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8">
            
            <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${webview.cspSource};">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="${styleResetUri}" rel="stylesheet">
            <link href="${styleMainUri}" rel="stylesheet">
            <script defer src=${scriptUri}></script>
            </head>
            <body>
                <div id="style-box" data-editor=${this.getDataForSheet()}></div>
            </body>
            <script defer src="${mainScriptPathOnDisk}"></script>
        </html>`;
  }
}