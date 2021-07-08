import { AppGenerator } from './generation/generators/app-generator'
import { UiFramework, TableType, Formatter } from './definition/context-types'
import { CodeDir, CodeRW } from '../io'
import ts, { factory } from "typescript"
import { Project } from "ts-morph"
import { CodegenOptions } from './interfaces'
import TemplateResolver from './generation/generators/template/template-resolver'
import { generateRoute } from './facade/facadeApi'
import { Entity } from './generation/entity'
import { getEntityName, getListPageComponentName, getPluralizedEntityName } from './generation/entity/helper'

// generates CRUD React pages (master-detail, eg. orders list, order detail form) from typescript
export function generatePages(inputSourceCode: string, io: CodeRW & CodeDir, options?: CodegenOptions) {
    const project = new Project({})
    const myClassFile = project.createSourceFile("src/types.ts", inputSourceCode)
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
    alert('generatePages')
    options?.names.map((typeName) => {
        
        const typeAlias = myClassFile.getTypeAlias(typeName)
        const props = typeAlias?.getType()?.getProperties() ?? []
        if (typeAlias) {
            const entity = {
                getName: () => typeName,
                getType: () => typeAlias,
                properties: props.map((prop) => ({
                    getName: () => prop.getName(),
                    getType: () => prop.getTypeAtLocation(myClassFile),
                    getTypeText: () => prop.getDeclarations()[0].getText()
                }))
            }

            const entityListComponentPageName = getListPageComponentName(entity)
            const listPageFilePath = `src/components/${entityListComponentPageName}.tsx`
            const moduleRouteUri = `app${getPluralizedEntityName(entity.getName())}`

            //generate component for list
            generateListComponent(io, entity, typeName)

            //generate page for list component
            generateListPage(io, entity, typeName, options.pageListTemplate, listPageFilePath);

            //generate route for generated list page
            addNewListRoute(io, moduleRouteUri, entityListComponentPageName, listPageFilePath)

            //generate new menu item for generated list page
            //addnewme
        }
    })

    function generateListComponent(io: CodeRW, entity: Entity, typeName:string, options?:CodegenOptions) {
        let context = {
            uiFramework: options?.uiFramework ?? UiFramework.MaterialUI, 
            formatter: Formatter.None, 
            index: {
                tableType: options?.tableType ?? TableType.BasicTable, 
                height: "400px"
            }
        }
            
        const generator = new AppGenerator(context, entity)
        const page = generator.generateListComponent(/* TODO entity / type name should be input - not in context */)
        
        const filePath = `src/components/${typeName}.tsx`
        const sourceFile = ts.createSourceFile(
            filePath,
            '',
            ts.ScriptTarget.ESNext,
            true,
            ts.ScriptKind.TSX
        )

        const pageSourceCode = printer.printList(ts.ListFormat.MultiLine, factory.createNodeArray([...page!.imports, page!.functionDeclaration]), sourceFile)
        
        console.log(`table for ${typeName} was generated: ${pageSourceCode}`)
        io.writeFile(filePath, pageSourceCode)
    }

    function generateListPage(io: CodeRW, 
        entity: Entity, 
        typeName:string,
        pageListTemplateSource: string,
        listPageFilePath: string) {
        const templateResolver = new TemplateResolver(entity);
        const listPage = templateResolver.generateListPage(pageListTemplateSource);

        if(listPage) {
            const listPageSourceFile = ts.createSourceFile(
                listPageFilePath,
                listPage,
                ts.ScriptTarget.ESNext,
                true,
                ts.ScriptKind.TSX
            )

            const generatedSourceCode = printer.printFile(listPageSourceFile);

            console.log(`page for ${typeName} list was generated: ${generatedSourceCode}`)

            io.writeFile(listPageFilePath, generatedSourceCode)
        }
    }

    function addNewListRoute(io:CodeRW,
                             moduleRouteUri: string, 
                             componentName: string,
                             componentFilePath: string){
            //for the beginning path to route json definition will be harcoded
            const routeDefinitionFilePath = 'src/routes.tsx'

            generateRoute(
                { routeFilePath: routeDefinitionFilePath, 
                  componentName: componentName, 
                  componentFilePath: componentFilePath, 
                  componentRouteUri: moduleRouteUri
                }, 
                io).then(generatedSource => {
                    if(generatedSource){
                        io.writeFile(routeDefinitionFilePath, generatedSource)
                    }
                }
            )
    }

    //function addNewMenuItem(io:CodeRW,
      //  )
}