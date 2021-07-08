import ts, { factory } from "typescript";

export function createJsxSelfclosingElement(tagName: string): ts.JsxSelfClosingElement{
    return factory.createJsxSelfClosingElement(
        factory.createIdentifier(tagName),
        undefined,
        factory.createJsxAttributes([])
      )
}