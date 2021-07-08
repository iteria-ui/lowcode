import ts, { factory } from "typescript"
import { createNamedImportDeclaration } from "../../ast/imports"

export function createFunctionalComponent(componentName: string | ts.Identifier | undefined = undefined, params: /* TODO generalize */ts.ParameterDeclaration[], body: ts.Statement[]): ts.FunctionDeclaration {
  return factory.createFunctionDeclaration(
    undefined,
    [
      factory.createModifier(ts.SyntaxKind.ExportKeyword),
      factory.createModifier(ts.SyntaxKind.DefaultKeyword)
    ],
    undefined,
    componentName,
    undefined,
    params,
    undefined,
    factory.createBlock(
      body,
      true
    )
  )
}

export function createJsxElement(tagIdentifier: ts.Identifier, attributes: readonly ts.JsxAttributeLike[] | undefined, children: readonly ts.JsxChild[] | undefined): ts.JsxElement {
  const jsxOpeningElement = factory.createJsxOpeningElement(tagIdentifier, undefined,
    factory.createJsxAttributes(attributes ?? []))
  const jsxClosingElement = factory.createJsxClosingElement(tagIdentifier)

  return factory.createJsxElement(jsxOpeningElement, children ?? [], jsxClosingElement)
}

export function createJsxAttribute(attribute:string, attributeValue:ts.Identifier|string) {
  let valueIdentifier: ts.Identifier;

  if(typeof attributeValue === 'string'){
    valueIdentifier = factory.createIdentifier(attributeValue)
  }else{
    valueIdentifier = attributeValue
  }

  return factory.createJsxAttribute(
    factory.createIdentifier(attribute),
    factory.createJsxExpression(
      undefined,
      valueIdentifier
    ))
}

export function createJsxSelfClosingElement(tagIdentifier: ts.Identifier, attributes: readonly ts.JsxAttributeLike[] | undefined): ts.JsxSelfClosingElement {
  return factory.createJsxSelfClosingElement(tagIdentifier, undefined,
    factory.createJsxAttributes(attributes ?? []))
}

export interface Component {
  tagName: ts.Identifier
  importDeclaration: ts.ImportDeclaration
}

export interface PageComponent {
  functionDeclaration: ts.FunctionDeclaration | ts.VariableStatement
  imports: ts.ImportDeclaration[]
}

export function defineComponent(tagName: string, packageName: string): Component {
  const tagNameIdentifier = factory.createIdentifier(tagName)
  let importDeclaration = createNamedImportDeclaration(tagName, packageName)

  return {
    tagName: tagNameIdentifier,
    importDeclaration
  }
}
