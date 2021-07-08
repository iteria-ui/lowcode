import { createAst, findByCondition, replaceElementsToAST } from "../../../../ast"
import ts, { ArrayLiteralExpression, factory, Node } from "typescript"
import { printSourceCode } from "../../../ast/ast";

export function addMenuItem(menuDefinitionSource:string,
                            title:string, 
                            url: string, 
                            icon?: string): string | undefined {
    
    const ast = createAst(menuDefinitionSource)

    if(ast){
        const declaration = findByCondition<Node>(ast, (node: Node) => {
            return (ts.isVariableDeclaration(node) && node.name.getText() == 'NavBar')
        });

        if(declaration){
            const menuItemsDeclaration = findByCondition<Node>(declaration, (node: Node) => {
                return (ts.isVariableDeclaration(node) && node.name.getText() == 'items')
            });

            if(menuItemsDeclaration){
                const alteredSource = createMenuItem(ast,
                                                  menuItemsDeclaration,
                                                  title,
                                                  url, 
                                                  icon)

                if(alteredSource){
                    return printSourceCode(alteredSource)
                }
            }
        }
    }
}

function createMenuItem(ast:ts.SourceFile,
                        definition: ts.Node,
                        title: string,
                        url: string,
                        icon?:string): ts.SourceFile | undefined {
    const menuItemsDeclaration = (definition as ts.VariableDeclaration)

    if(menuItemsDeclaration && menuItemsDeclaration.initializer){
        if(ts.isArrayLiteralExpression(menuItemsDeclaration.initializer)){
            const arrayLitExpression = menuItemsDeclaration.initializer as ArrayLiteralExpression

            let elementArray: ts.Expression[] = []

            arrayLitExpression.elements.forEach(element => {
                elementArray = [...elementArray, element]
            })

            const newMenuDefinition = createNewMenuDefinitionsArray(elementArray, 
                                                                    title, 
                                                                    url, 
                                                                    icon)

            ast =  replaceElementsToAST(ast, 
                                        arrayLitExpression.pos,
                                        newMenuDefinition)

            return ast
        }
    }
}

function createNewMenuDefinitionsArray(expressions: ts.Expression[],
                                       title: string,
                                       url: string,
                                       icon?:string): ts.ArrayLiteralExpression{
            
    const newExpressions = [...expressions, createMenuItemDefinition(title, url, icon)]
    return factory.createArrayLiteralExpression(newExpressions)
}

function createMenuItemDefinition(title: string, 
                                  url: string, 
                                  icon?: string): ts.ObjectLiteralExpression {

    let properties: ts.PropertyAssignment[] = []
    properties = [...properties, factory.createPropertyAssignment('href', factory.createStringLiteral(url))]
    properties = [...properties, factory.createPropertyAssignment('title', factory.createStringLiteral(title))]

    if(icon){
        properties = [...properties, factory.createPropertyAssignment('icon', factory.createIdentifier(icon))]
    }

    return factory.createObjectLiteralExpression(properties)
}