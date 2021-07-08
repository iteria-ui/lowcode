import ts from "typescript"
import { addJsxElementsToAST } from "../ast/transformer"
import {
  createSelfClosingJsxRouteElement,
  createOpeningAndClosingJsxRouteElement,
} from "./factory"

export const isValidJsxElement = (node: ts.Node) =>
  ts.isJsxOpeningLikeElement(node) || ts.isJsxElement(node)

export const castRouteNodeToProperType = (node: ts.Node) => {
  const castedNode = node as ts.JsxOpeningLikeElement | ts.JsxElement
  if (ts.isJsxOpeningLikeElement(castedNode)) {
    return node as ts.JsxOpeningLikeElement
  } else {
    return castedNode.openingElement as ts.JsxOpeningElement
  }
}

export const cloneRouteElements = (
  node: ts.JsxOpeningLikeElement,
  ast: ts.SourceFile,
  start: number,
  newPageName: string
) => {
  if (ts.isJsxSelfClosingElement(node)) {
    const newSelfClosingNode = createSelfClosingJsxRouteElement(newPageName)
    return addJsxElementsToAST(ast, start, [newSelfClosingNode])
  } else {
    const newOpeningAndClosingElements = createOpeningAndClosingJsxRouteElement(
      newPageName
    )
    return addJsxElementsToAST(ast, start, [...newOpeningAndClosingElements])
  }
}
