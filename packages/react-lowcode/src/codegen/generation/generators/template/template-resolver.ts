import ts, { factory } from "typescript";
import { transformer } from "../../../../ast";
import { printSourceCode } from "../../../ast/ast";
import { createNamedImportDeclaration } from "../../../ast/imports";
import { isOpeningOrSelfClosingElementWithName, isImportDeclarationWithName, isFunctionDeclarationWithName } from "../../../ast/node";
import { createAst } from "../../code-generation/createSourceFile";
import { Entity } from "../../entity";
import { getInputParameterIdentifier, getListComponentName, getListPageComponentName } from "../../entity/helper";

export default class TemplateResolver {
    private _entity?: Entity

    constructor(entity?: Entity) {
        this._entity = entity;
    }

    generateListPage(template: string): string | undefined {
        let result: string | undefined;

        if (this._entity) {
            let ast = createAst(template);

            if (ast) {
                const templateComponentName = 'ListPlaceholder';
                const templatePageComponentName = 'App'
                const listComponentName = getListComponentName(this._entity);
                const listPageComponentName = getListPageComponentName(this._entity);
                const inputParameterIdentifier = getInputParameterIdentifier(this._entity);

                const transformImportDeclaration = (node: ts.Node, importName: string, tableComponentName: string) => {
                    if(isImportDeclarationWithName(node, importName)) {
                        return createNamedImportDeclaration(tableComponentName, './' + tableComponentName);
                    }
                }

                const transformListElement = (node: ts.Node, elementName: string, tableComponentName: string, inputParameterIdentifier: ts.Identifier) => {
                    if(isOpeningOrSelfClosingElementWithName(node, elementName)) {
                        return this.createListComponentElement(tableComponentName, inputParameterIdentifier);
                    }
                }

                const transformPageElement = (node: ts.Node, elementName: string) => {
                    if(isFunctionDeclarationWithName(node, elementName)) {
                        return this.createPageComponentElement(node, listPageComponentName);
                    }
                }

                const transformListPlaceholderByListComponent = (node: ts.Node) => {
                    return transformImportDeclaration(node, templateComponentName, listComponentName)
                        || transformListElement(node, templateComponentName, listComponentName, inputParameterIdentifier)
                };

                const transformPageComponent = (node:ts.Node) => {
                    return transformPageElement(node, templatePageComponentName)
                }

                const transformExportElement = (node: ts.Node) => {
                    if(ts.isExportAssignment(node) && node.expression.getText() === templatePageComponentName){
                        return this.createExportAssignment(listPageComponentName)
                    }
                }

                let transformationResult = ts.transform(ast, [transformer(transformListPlaceholderByListComponent)])
                transformationResult = ts.transform(transformationResult.transformed[0], [transformer(transformPageComponent)])
                transformationResult = ts.transform(transformationResult.transformed[0], [transformer(transformExportElement)])
                result = printSourceCode(transformationResult.transformed[0]);
            }
        }

        return result;
    }

    private createExportAssignment(listPageComponentName: string){
        return factory.createExportAssignment(undefined, 
                                              undefined, 
                                              undefined, 
                                              factory.createIdentifier(listPageComponentName))
    }

    private createListComponentElement = (tableComponentName: string, inputParameterIdentifier: ts.Identifier) => {
        return factory.createJsxSelfClosingElement(
            factory.createIdentifier(tableComponentName),
            undefined,
            factory.createJsxAttributes([factory.createJsxAttribute(
                inputParameterIdentifier,
                factory.createJsxExpression(
                    undefined,
                    factory.createPropertyAccessChain(
                        factory.createIdentifier("data"), //TODO:PC try read identifier from template
                        factory.createToken(ts.SyntaxKind.QuestionDotToken),
                        inputParameterIdentifier
                    )
                )
            )])
        );
    }

    private createPageComponentElement = (node:ts.Node, listPageComponentName: string) => {
        const oldDeclaration: ts.FunctionDeclaration = node as ts.FunctionDeclaration

        let newDeclaration: ts.FunctionDeclaration

        if(oldDeclaration){
            newDeclaration = factory.createFunctionDeclaration(
                undefined,
                [],
                undefined,
                listPageComponentName,
                undefined,
                [],
                undefined,
                oldDeclaration.body
              )
        } else{
            newDeclaration = oldDeclaration
        }

        return newDeclaration
    }
}