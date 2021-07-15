const vscode = acquireVsCodeApi();

const container = document.getElementById('style-box')
container.style.margin = "10px"

const data = container.getAttribute('data-editor')

// create the editor
const editor = document.createElement('translation-sheet')
editor.setAttribute('id', 'translation')
editor.translations = JSON.parse(data)
container.appendChild(editor)



window.addEventListener('message', event => {
    const message = event.data.json; // The JSON data our extension sent
    const json = parseJsonData(message)
    const getOldEditor = document.getElementById('translation')
    // refresh data attribute
    container.setAttribute('data-editor', JSON.stringify(json))
    // get new data from vscode
    let data = container.getAttribute('data-editor')
    // initialize newEditor
    const newEditor = document.createElement('translation-sheet')
    newEditor.setAttribute('id', 'translation')
    newEditor.translations = JSON.parse(data)
    container.appendChild(newEditor)

    newEditor.addEventListener('change', async (e) => {
    const jsonString = JSON.stringify(e.detail, null, 2);
        vscode.postMessage({
            json: jsonString,
            objjson: e.detail
        });
    })

    // remove oldEditor
    container.removeChild(getOldEditor)
});


const parseJsonData = (eventJson) => {
    const oldjson = eventJson.replace(/(\r\n|\n|\r)/gm, "");
    let json = JSON.parse(oldjson)
    return json
}




