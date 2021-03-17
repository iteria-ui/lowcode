import { ModuleGenerator } from './generation/generators/module-generator'
import { UiFramework, TableType } from './definition/context-types'
import { CodeDir, CodeRW } from '../io'

import ts, { factory } from "typescript"
import { Project } from "ts-morph"

interface CodegenOptions {
    // whitelisted entity names
    readonly names: string[]
    // default is MaterialUI
    uiFramework?: UiFramework
}

// generates CRUD React pages (master-detail, eg. orders list, order detail form) from typescript
export function generatePages(inputSourceCode: string, io: CodeRW & CodeDir, options?: CodegenOptions) {
    const project = new Project({})
    const myClassFile = project.createSourceFile("src/types.ts", inputSourceCode)
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

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
            const context = {
                useFormatter: true,
                tableType: TableType.DataTable,
                uiFramework: options.uiFramework ?? UiFramework.MaterialUI,
                entity,
            }
            const generator = new ModuleGenerator(context)
            const page = generator.generateTablePage(/* TODO entity / type name should be input - not in context */)
            
            const filePath = `src/components/${typeName}.tsx`
            const sourceFile = ts.createSourceFile(
                filePath,
                '',
                ts.ScriptTarget.ESNext,
                true,
                ts.ScriptKind.TSX
            )
            const pageSouceCode = printer.printList(ts.ListFormat.MultiLine, factory.createNodeArray([...page.imports, page.functionDeclaration]), sourceFile)
            io.writeFile(filePath, pageSouceCode)
        }
    })
}
