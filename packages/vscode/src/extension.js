'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const SideBarProvider_1 = require("./SideBarProvider");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// tslint:disable-next-line:export-name
function activate(context) {
    const sideBar = new SideBarProvider_1.SidebarProvider(context.extensionUri);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider("jsonEditor", sideBar));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map