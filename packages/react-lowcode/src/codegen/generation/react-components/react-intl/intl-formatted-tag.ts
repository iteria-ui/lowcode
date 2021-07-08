import ts, { factory } from "typescript"
import { createNamedImportDeclaration } from "../../../ast/imports";
import { defineComponent, createJsxSelfClosingElement, Component } from '../react-component-helper'

export enum IntlFormatingTags {
    FormattedDate = "FormattedDate",
    FormattedTime = "FormattedTime",
    FormattedNumber = "FormattedNumber",
    FormattedDateTimeRange = "FormattedDateTimeRange",
    FormattedRelativeTime = "FormattedRelativeTime",
    FormattedPlural = "FormattedPlural",
    FormattedMessage = "FormattedMessage"
}

export default class ReactIntlTag {
    _imports: ts.ImportDeclaration[]

    constructor(imports: ts.ImportDeclaration[]) {
        this._imports = imports;
    }

    getImports(){
        return this._imports;
    }

    formatDate(value: ts.JsxExpression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedDate)
        return this.formattedValue(IntlFormatingTags.FormattedDate, value)
    }

    formatTime(value: ts.JsxExpression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedTime)

        return this.formattedValue(IntlFormatingTags.FormattedTime, value)
    }

    formatDateTime(value: ts.JsxExpression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedDate)

        return this.formattedValue(IntlFormatingTags.FormattedDate, value),
            factory.createJsxText(
                " ",
                false
            ),
            this.formattedValue(IntlFormatingTags.FormattedTime, value)
    }

    formatNumber(value: ts.JsxExpression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedDate)

        return this.formattedValue(IntlFormatingTags.FormattedNumber, value)
    }

    formatPlural(value: ts.JsxExpression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedDate)

        return this.formattedValue(IntlFormatingTags.FormattedPlural, value)
    }

    formatDuration(value: ts.JsxExpression, unit: ts.Expression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedDate)

        return this.formattedValue(IntlFormatingTags.FormattedRelativeTime, value
            // TODO unit: Unit, format: string, updateIntervalInSeconds: number,
        )
    }

    formatTimeRange(from: ts.JsxExpression, to: ts.JsxExpression): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedDateTimeRange)

        let tagNameIdentifier:ts.Identifier = factory.createIdentifier(IntlFormatingTags.FormattedDateTimeRange.toString())

        return createJsxSelfClosingElement(tagNameIdentifier,
                [
                    factory.createJsxAttribute(
                        factory.createIdentifier("from"),
                        factory.createJsxExpression(
                            undefined,
                            from
                        )
                    ),
                    factory.createJsxAttribute(
                        factory.createIdentifier("to"),
                        factory.createJsxExpression(
                            undefined,
                            to
                        )
                    )
                ]
              )
    }

    formatMessage(message: ts.StringLiteral | ts.JsxExpression, defaultMessage: ts.StringLiteral | ts.JsxExpression | undefined, values: ts.Expression|undefined): ts.JsxSelfClosingElement {
        this.prepareImport(IntlFormatingTags.FormattedMessage)

        let tagNameIdentifier:ts.Identifier = factory.createIdentifier(IntlFormatingTags.FormattedMessage.toString())

        let attributes: ts.JsxAttributeLike[] = [];
        attributes.push(factory.createJsxAttribute(
            factory.createIdentifier("id"),
            message))

        if(defaultMessage){
            attributes.push(factory.createJsxAttribute(
                factory.createIdentifier("defaultMessage"),
                defaultMessage))
        }

        if(values){
            attributes.push(factory.createJsxAttribute(
                factory.createIdentifier("values"),
                factory.createJsxExpression(
                    undefined,
                    values)))
        }

        return createJsxSelfClosingElement(tagNameIdentifier, attributes)
    }

    private formattedValue(tagNformattingTagame: IntlFormatingTags, expression: ts.JsxExpression) {
        let identifierTagName: ts.Identifier = factory.createIdentifier(tagNformattingTagame.toString())

        return createJsxSelfClosingElement(identifierTagName,
            [
                factory.createJsxAttribute(
                    factory.createIdentifier("value"),
                    expression
                )
            ]
        )
    }

    private prepareImport(formattingTag: IntlFormatingTags) {
        let declaration = createNamedImportDeclaration(formattingTag.toString(), 'react-intl')
        this._imports.push(declaration)
    }
}
