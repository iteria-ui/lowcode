"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarProvider = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
class SidebarProvider {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
        vscode.window.onDidChangeActiveTextEditor(() => {
            this.onActiveEditorChanged();
        });
        vscode.workspace.onDidSaveTextDocument(() => this.onActiveEditorChanged());
        vscode.workspace.onDidCloseTextDocument(() => this.onActiveEditorChanged());
    }
    resolveWebviewView(webviewView) {
        this._view = webviewView;
        webviewView.webview.options = {
            // Allow scripts in the webview
            enableScripts: true,
            localResourceRoots: [this._extensionUri],
        };
        webviewView.onDidChangeVisibility(() => {
            this.onActiveEditorChanged();
        });
        webviewView.webview.onDidReceiveMessage((data) => __awaiter(this, void 0, void 0, function* () {
            const json = data.objjson;
            const openFiles = vscode.workspace.textDocuments;
            if (data.json) {
                openFiles.forEach(element => {
                    let data = fs.readFileSync(element.fileName);
                    if (data.toString() !== "") {
                        const jsonData = JSON.parse(data.toString());
                        const fileNameWE = path.basename(element.fileName);
                        const extension = path.extname(element.fileName);
                        const fileName = path.basename(fileNameWE, extension);
                        const value = json[fileName];
                        const diff = this.getDiffOfJsons(value, jsonData);
                        if (Object.keys(diff).length !== 0) {
                            for (let diffKey in diff) {
                                if (diff[diffKey] == undefined) {
                                    delete value.diffKey;
                                }
                                else
                                    value[diffKey] = diff[diffKey];
                            }
                            let finalObject = {};
                            finalObject = value;
                            this.createFiles(element.fileName, "", JSON.stringify(finalObject, undefined, 2));
                        }
                    }
                });
            }
        }));
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }
    revive(panel) {
        this._view = panel;
    }
    createFiles(path, fileName, data) {
        fs.writeFile(path + '/' + fileName, data, err => {
            if (err) {
                return console.log(err);
            }
            console.log('Success');
        });
    }
    getDiffOfJsons(obj1, obj2) {
        let result = {};
        for (let key in obj1) {
            if (key in obj2) {
                if (obj2[key] !== obj1[key]) {
                    result[key] = obj1[key];
                }
            }
            else {
                result[key] = obj1[key];
            }
        }
        if (Object.keys(obj2).length > Object.keys(obj1).length) {
            for (let key in obj2) {
                if (!(key in obj1)) {
                    result[key] = undefined;
                }
            }
        }
        return result;
    }
    onActiveEditorChanged() {
        if (vscode.workspace.textDocuments.length !== 0) {
            const openFiles = vscode.workspace.textDocuments;
            let finalObject = {};
            let buildObject = {};
            openFiles.forEach(element => {
                let data = fs.readFileSync(element.fileName);
                const fileNameWE = path.basename(element.fileName);
                const extension = path.extname(element.fileName);
                const fileName = path.basename(fileNameWE, extension);
                buildObject[fileName] = JSON.parse(data.toString());
                finalObject = Object.assign(Object.assign({}, finalObject), buildObject);
            });
            const json = JSON.stringify(finalObject);
            if (this._view)
                this._view.webview.postMessage({ json: json });
        }
    }
    getDataForSheet() {
        if (vscode.workspace.textDocuments.length !== 0) {
            const openFiles = vscode.workspace.textDocuments;
            let finalObject = {};
            let buildObject = {};
            openFiles.forEach(element => {
                let data = fs.readFileSync(element.fileName);
                const fileNameWE = path.basename(element.fileName);
                const extension = path.extname(element.fileName);
                const fileName = path.basename(fileNameWE, extension);
                buildObject[fileName] = JSON.parse(data.toString());
                finalObject = Object.assign(Object.assign({}, finalObject), buildObject);
            });
            const json = JSON.stringify(finalObject);
            return json;
        }
        return "{}";
    }
    _getHtmlForWebview(webview) {
        const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "reset.css"));
        const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "index.umd.js"));
        const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "index.css"));
        const mainScriptPathOnDisk = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "jsoneditor", "sideBar.js"));
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
exports.SidebarProvider = SidebarProvider;
//# sourceMappingURL=SidebarProvider.js.map