'use strict';
import * as vscode from 'vscode';
import { SidebarProvider} from './SideBarProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
// tslint:disable-next-line:export-name
export function activate(context: vscode.ExtensionContext): void {
    const sideBar : SidebarProvider = new SidebarProvider(context.extensionUri);
    
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider("jsonEditor", sideBar)
    );
}
