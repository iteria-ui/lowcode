import ts from "typescript"
import Pluralize from "typescript-pluralize"
import { camalizeString } from "../../../strings/camel"
import { Formatter } from "../../definition/context-types"
import GenerationContext from "../context/context"
import { Entity, Property } from "../entity"
import { Component } from "../react-components/react-component-helper"
import ReactIntlFormatter from "../react-components/react-intl/intl-formatter"
import { identifier } from "../../ast/identifier"
import { createNamedImportDeclaration, createNameSpaceImport } from "../../ast/imports"
import { bindingParameter } from "../../ast/parameters"
import { jsxText, stringLiteral } from "../../ast/text"

export class GeneratorHelper {
    readonly _context: GenerationContext;
    readonly _imports: ts.ImportDeclaration[];
    readonly intlFormatter: ReactIntlFormatter;

    constructor(generationContext: GenerationContext, imports: ts.ImportDeclaration[]) {
        this._context = generationContext;
        this._imports = imports;
        this.intlFormatter = new ReactIntlFormatter(this._context, this._imports);
    }
    
    getEntityName(entity: Entity): string{
        return camalizeString(entity.getName())
    }

    addImportDeclaration(specifier: string, module: string, isNameSpaceImport: boolean = false): ts.ImportDeclaration{
        let importDeclaration = createNamedImportDeclaration(specifier, module)
    
        if(isNameSpaceImport){
          importDeclaration = createNameSpaceImport(specifier, module)
        }else{
          importDeclaration = createNamedImportDeclaration(specifier, module)
        }
    
        return importDeclaration
    }

    getComponentName(entity: Entity) {
        return `${entity.getName()}Table`
    }

    prepareComponent(component: Component, imports: ts.ImportDeclaration[]): Component {
        imports.push(component.importDeclaration)
        return component;
    }

    getHeaderTitle(entity: Entity, property: Property): ts.StringLiteral | ts.JsxSelfClosingElement{
        let localizedName;

        if(this._context.formatter === Formatter.ReactIntl){
          localizedName = this.intlFormatter.localizePropertyNameUsingTag(property, entity);
        }else{
          localizedName = stringLiteral(property.getName())
        }
  
        return localizedName;
    }

    getHeaderTitleJsxText(entity: Entity, property: Property): ts.JsxText | ts.JsxSelfClosingElement{
        let localizedName;
  
        if(this._context.formatter === Formatter.ReactIntl){
          localizedName = this.intlFormatter.localizePropertyNameUsingTag(property, entity)
        }else{
          localizedName = jsxText(property.getName())
        }
  
        return localizedName;
    }

    getInputParameterIdentifier(entity: Entity) : ts.Identifier {
        return identifier(Pluralize.plural(this.getEntityName(entity)))
    }

    localizePropertyNameWithTag(entity: Entity, property: Property): ts.JsxSelfClosingElement {
        return this.intlFormatter.localizePropertyNameUsingTag(property, entity)
    }

    createInputParameter(entity: Entity): ts.ParameterDeclaration {
        return bindingParameter(this.getInputParameterIdentifier(entity))
    }
}
