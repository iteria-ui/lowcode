import ts, { factory, textChangeRangeIsUnchanged } from "typescript"
import { defineHook } from '../../../ast/hooks'
import { createNamedImportDeclaration } from "../../../ast/imports";
import { createVariableStatement } from "../../../ast/variables";


export enum IntlFormatingImperativeMethods {
    formatDate = "formatDate",
    formatTime = "formatTime",
    formatNumber = "formatNumber",
    formatPlural = "formatPlural",
    formatRelativeTime = "formatRelativeTime",
    formatDateTimeRange = "formatDateTimeRange",
    formatMessage = "formatMessage"
}

//TODO: add hook support
export default class ReactIntlImperative {
    _imports: ts.ImportDeclaration[]
    _initialized: boolean;

    constructor(imports: ts.ImportDeclaration[]){
        this._imports = imports
        this._initialized = false
    }

    getImports(){
        return this._imports;
    }

    getImperativeHook(): ts.VariableStatement {
        var hook = defineHook("intl", "useIntl", "react-intl");

        this._imports.push(hook.importDeclaration);

        let callExpression = factory.createCallExpression(
            factory.createIdentifier(hook.hookName),
            undefined,
            []
          )

        return createVariableStatement(hook.defaultInstanceName, callExpression, ts.NodeFlags.Const)
    }

    formatDate(value: ts.Expression): ts.CallExpression {
        return this.formatValue([value], IntlFormatingImperativeMethods.formatDate)
    }

    formatTime(value: ts.Expression): ts.CallExpression {
        return this.formatValue([value], IntlFormatingImperativeMethods.formatTime)
    }
    
    formatNumber(value: ts.Expression): ts.CallExpression {
        return this.formatValue([value], IntlFormatingImperativeMethods.formatNumber)
    }

    formatPlural(value: ts.Expression): ts.CallExpression {
        return this.formatValue([value], IntlFormatingImperativeMethods.formatPlural)
    }

    formatDuration(value: ts.Expression, unit: ts.Expression): ts.CallExpression {
        return this.formatValue([value, unit], IntlFormatingImperativeMethods.formatRelativeTime)
    }

    formatTimeRange(from: ts.Expression, to: ts.Expression): ts.CallExpression {
        return this.formatValue([from, to], IntlFormatingImperativeMethods.formatDateTimeRange)
    }

    formatMessage(message: ts.StringLiteral | ts.JsxExpression, values: ts.Expression): ts.CallExpression {
        return this.formatValue([message, values], IntlFormatingImperativeMethods.formatMessage)
    }

    private formatValue(params: ts.Expression[], methodName: IntlFormatingImperativeMethods) {
        return factory.createCallExpression(
            factory.createPropertyAccessExpression(
                factory.createIdentifier("intl"),
                factory.createIdentifier(methodName.toString())
            ),
            undefined,
            params
        )
    }

    private prepareImport(methodName: IntlFormatingImperativeMethods | string) {
        let declaration = createNamedImportDeclaration(methodName.toString(), 'react-intl')
        this._imports.push(declaration)
    }
}
