import ts from "typescript";

export const isImportDeclarationWithName = (node: ts.Node, name: string): boolean | undefined => {
    if (ts.isImportDeclaration(node)) {
        if (node.importClause) {
            if (node.importClause.name) {
                if (node.importClause.name.escapedText === name) {
                    return true;
                }
            }
        }
    }
}

export const isOpeningOrSelfClosingElementWithName = (node: ts.Node, name: string): boolean | undefined => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (ts.isIdentifier(node.tagName)) {
            if (node.tagName.escapedText === name) {
                return true;
            }
        }
    }
}

export const isFunctionDeclarationWithName = (node: ts.Node, name: string): boolean | undefined => {
    if (ts.isFunctionDeclaration(node)) {
        if (node.name?.escapedText === name) {
            return true;
        }
    }
}