import { Hook } from "../../ast/hooks"
import { createNamedImportDeclaration } from "./imports"


export function defineHook(defaultInstanceName: string, hookName: string, packageName: string): Hook {
    let importDeclaration = createNamedImportDeclaration(hookName, packageName)

    return {
        hookName: hookName,
        defaultInstanceName,
        importDeclaration
    }
}
