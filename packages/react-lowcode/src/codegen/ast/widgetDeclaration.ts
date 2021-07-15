import ts, { SyntaxKind } from "typescript"
import { astFindSource,SourceLineCol} from "../../ast"
import { WidgetProperty, WidgetPropertyValue } from "../interfaces"

export function findWidgetParentNode(sourceCode:string, position: SourceLineCol): ts.Node  | null | undefined{
    let astCode = astFindSource(sourceCode, position)

    if(astCode){
        let parent = astCode.parent

        while(parent){
            if(isWidgetDeclaration(parent)){
                return parent
            }

            parent = parent.parent
        }
    }else{
        console.log('cannot find widget element')
    }

    return undefined
}

export function isDataTableWidget(sourceCode:string, position: SourceLineCol): boolean {
    let isDataTableDeclaration = false
    let astCode = astFindSource(sourceCode, position)

    if(astCode){
        let identifier = findIdentifier(astCode)

        if(identifier){
            isDataTableDeclaration = identifier.getText() === 'DataGrid'
        }else{
            let dataGridNode = astCode.getChildAt(1) as ts.JsxSelfClosingElement

            if(dataGridNode && dataGridNode.getChildAt(0)?.getChildAt(1)?.getText() === 'DataGrid')//todo(mch): very very uglu, need to be refactored to be more generic
                isDataTableDeclaration = true
        }
    }

    return isDataTableDeclaration
}

export function isFormWidget(sourceCode: string, position: SourceLineCol): boolean {
    let isFormWidget = false
    let astCode = astFindSource(sourceCode, position)

    if(astCode){
        const variableDeclaration = findParentVariableDeclaration(astCode)

        if(variableDeclaration){
            const identifier = findIdentifier(variableDeclaration)

            if(identifier){//TODO(mch): hardly need to refactor this bad solution
                isFormWidget = identifier.getText().startsWith('Generated') || identifier.getText().indexOf('Formik') > -1
            }
        }
    }

    return isFormWidget
}

export function getWidgetProperties(node: ts.Node): WidgetProperty[] {
    let result: WidgetProperty[] = [];

    if (isElementWithAttributes(node)) {
        result = node.attributes.properties.map(prop => {
            if (ts.isJsxAttribute(prop)) {
                const value = getAttributeValue(prop);
                const type = getAttributeType(prop) ?? WidgetPropertyValue.EXPRESSION
                if (value) {
                    return {
                        name: prop.name.escapedText.toString(),
                        value,
                        type
                    };
                }
            }

            return undefined;
        }).filter((item): item is WidgetProperty => {
            return item !== undefined;
        });
    }

    return result;
}

function findIdentifier(root: ts.Node): ts.Identifier | undefined{
    let identifier = undefined
    root.getChildren().forEach(child => {
        if(ts.isIdentifier(child))
            identifier = child
            return
    });

    return identifier
}

function findParentVariableDeclaration(root: ts.Node): ts.VariableDeclaration | undefined {
    let declaration: ts.VariableDeclaration | undefined = undefined

    let parentNode = root.parent

    while(parentNode){
        if(ts.isVariableDeclaration(parentNode)){
            declaration = parentNode
            break
        }

        parentNode = parentNode.parent
    }

    return declaration
}

function isWidgetDeclaration(node: ts.Node){
    return isTableDeclaration(node) || isDetailDeclaration(node)
}

function isTableDeclaration(node: ts.Node): boolean{
    ///TODO: check also for export key word
   return ts.isFunctionDeclaration(node)
}

function isDetailDeclaration(node: ts.Node): boolean{
    ///TODO: check also for export key word
    return ts.isVariableDeclaration(node)
}

function isElementWithAttributes(node: ts.Node): node is ts.JsxOpeningElement | ts.JsxSelfClosingElement {
    return (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) && node.attributes.properties.length > 0;
}

function getAttributeValue(attribute: ts.JsxAttribute): string | undefined {
    if (attribute.initializer) {
        return getStringTypeAttributeValue(attribute.initializer)
            || getNumberTypeAttributeValue(attribute.initializer)
            || getBooleanTypeAttributeValue(attribute.initializer)
            || getExpressionTypeAttributeValue(attribute.initializer);
    }

    return 'true';
}

function getAttributeType(attribute: ts.JsxAttribute): string | undefined {
    if (attribute.initializer) {
        if (ts.isJsxExpression(attribute.initializer)) 
            return WidgetPropertyValue.EXPRESSION
        else 
            return WidgetPropertyValue.STRING_LITERAL
    }
}

function getStringTypeAttributeValue(initializer: ts.StringLiteral | ts.JsxExpression): string | undefined {
    return ts.isStringLiteral(initializer) ? initializer.text : undefined;
}

function getNumberTypeAttributeValue(initializer: ts.StringLiteral | ts.JsxExpression): string | undefined {
    if (ts.isJsxExpression(initializer) && initializer.expression !== undefined && ts.isNumericLiteral(initializer.expression)) {
        return initializer.expression.getText();
    }
}

function getBooleanTypeAttributeValue(initializer: ts.StringLiteral | ts.JsxExpression): string | undefined {
    if (ts.isJsxExpression(initializer) && initializer.expression
        && (initializer.expression.kind === SyntaxKind.TrueKeyword || initializer.expression.kind === SyntaxKind.FalseKeyword)) {
        return initializer.expression.getText();
    }
}


function getExpressionTypeAttributeValue(initializer: ts.StringLiteral | ts.JsxExpression) : string | undefined {
    if (ts.isJsxExpression(initializer) && initializer.expression) {
        return initializer.expression.getText()
    }
} 