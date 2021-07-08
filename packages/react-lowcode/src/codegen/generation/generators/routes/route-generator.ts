import ts, { ArrayLiteralExpression, factory, Node } from "typescript"
import { addElementsToAST, createAst, findByCondition, replaceElementsToAST } from "../../../../ast"
import { printSourceCode } from "../../../ast/ast"
import { createImportDeclaration, createNamedImportDeclaration, existsImportWithNamespace } from "../../../ast/imports"
import { createJsxSelfclosingElement } from "../../../ast/jsxElements"

export function generateNewRoute(routeDefinitionSource: string, 
                                 componentRouteUri:string, 
                                 componentName: string, 
                                 componentPath: string): string | undefined{

    const ast = createAst(routeDefinitionSource)                               

    if(ast){
        if(!existsRoute(ast, componentName)){
           let alteredSource = addComponentRoute(ast, componentRouteUri, componentName, componentPath)

           return printSourceCode(alteredSource)
        }
    }
}

function addComponentRoute(ast:ts.SourceFile, 
                           componentRouteUri: string,
                           componentName:string,
                           componentPath: string): ts.SourceFile{

    let alteredSource =  addImport(ast, componentName, componentPath)

    const definition = findByCondition<Node>(ast, (node: Node) => {
        return (ts.isPropertyAssignment(node) && node.name.getText() == 'children')
    });

    if(definition){
        const propAssignment = (definition as ts.PropertyAssignment)

        if(ts.isArrayLiteralExpression(propAssignment.initializer)){
            const arrayLitExpression = propAssignment.initializer as ArrayLiteralExpression

            let elementArray: ts.Expression[] = []

            arrayLitExpression.elements.forEach(element => {
                elementArray = [...elementArray, element]
            })

            const newRouteDefinitions = createNewRouteDefinitionsArray(elementArray, componentRouteUri, componentName)

            alteredSource = replaceElementsToAST(alteredSource, 
                                        arrayLitExpression.pos,
                                        newRouteDefinitions)
        }
    }

    return alteredSource
}

function createNewRouteDefinitionsArray(expressions: ts.Expression[],
                                        componentRouteUri: string,
                                        componentName:string,): ts.ArrayLiteralExpression{
                                                
    const newExpressions = [...expressions, createRouteDefinition(componentRouteUri, componentName)]
    return factory.createArrayLiteralExpression(newExpressions)
}

function createRouteDefinition(componentRouteUri: string, 
                               componentName: string): ts.ObjectLiteralExpression {

        let properties: ts.PropertyAssignment[] = []
        properties = [...properties, factory.createPropertyAssignment('path', factory.createStringLiteral(componentRouteUri))]
        properties = [...properties, factory.createPropertyAssignment('element', createJsxSelfclosingElement(componentName) )]

        return factory.createObjectLiteralExpression(properties)
}

function addImport(ast: ts.SourceFile, 
                   componentName: string, 
                   componentPath: string): ts.SourceFile {
    const newRouteImport = createImportDeclaration(componentName, componentPath)

    const position = findPositionOfFirstImport(ast)

    return addElementsToAST(ast, position, [newRouteImport])
}

function findPositionOfFirstImport(ast: ts.SourceFile): number{
    const firstImport = findByCondition<Node>(ast, (node: Node) => {
        return ts.isImportDeclaration(node) && node.pos > 0
    });

    return firstImport !== undefined ? firstImport.pos : 0
}

function  existsRoute(ast: ts.SourceFile, componentName: string): boolean{
    const existingRoute = findByCondition<Node>(ast, (node: Node) => {
        return existsImportWithNamespace(node, componentName)
      });

    return existingRoute !== undefined
}