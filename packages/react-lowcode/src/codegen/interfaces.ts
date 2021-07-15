import ts, { factory } from "typescript";
import { SourceLineCol } from "../ast";
import { HookImport } from "../ast/hooks";
import { TagImport } from "../ast/tags";
import { UiFramework } from "./definition/context-types";

export interface CodegenOptions {
    // whitelisted entity names
    readonly names: string[],
    //template for generating list page
    pageListTemplate: string,
    // default is MaterialUI
    uiFramework?: UiFramework
}

export interface InsertOptions {
    entityName: string
    property: string
    index?: number
}

export interface DeleteOptions {
    index: number
}

export interface ColumnSourcePositionOptions{
    index: number
}

export interface SourceLineColLen extends SourceLineCol {
    length: number;
}

export interface ColumnSourcePositionResult {
    columnPosition: SourceLineColLen,
    valuePosition?: SourceLineColLen,
    headerPosition?: SourceLineColLen
}

export interface WidgetProperty {
    name: string,
    value: string,
    type: WidgetPropertyValue
}

export interface WidgetProperties {
    properties: WidgetProperty[]
}

export enum WidgetPropertyValue {
    "EXPRESSION" = "EXPRESSION",
    "STRING_LITERAL" = "STRING_LITERAL"
}

interface ThemeCodegen {
    providerTag(...children: ts.JsxChild[]): any
}

interface IntlCodegen {
    providerTag(...children: ts.JsxChild[]): any
 }

export interface AppGenerators {
    newSourceFileContext(path: string): JsxFileContext
    theme: ThemeCodegen,
    intl: IntlCodegen,
    //authorization: AuthorizationCodegen
}

export class JsxFileContext {

    uniqueImports() {
        return []
    }
  
    useHook(hook: HookImport, ...params: []) {
        // TODO unique import
        return null
    }
  
    tag(tag: TagImport, ...children: ts.JsxChild[]) {
        // TODO unique import
        return null
    }
  
    returnFragment(...children: ts.JsxChild[]): ts.Statement | null {
  
        if (children?.length == 1) {
            // TODO handle one child
        }
    
        factory.createReturnStatement(factory.createJsxFragment(
            factory.createJsxOpeningFragment(),
            children,
            factory.createJsxJsxClosingFragment()
          ))
    
        return null
    }
}  