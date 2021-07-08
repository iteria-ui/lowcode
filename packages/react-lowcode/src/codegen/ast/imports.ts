import ts, {factory} from "typescript"

export function createNamedImportDeclaration(importSpecifier: string, module:string): ts.ImportDeclaration {
    return factory.createImportDeclaration(
        undefined,
        undefined,
        factory.createImportClause(
          false,
          undefined,
          factory.createNamedImports([
            factory.createImportSpecifier(
              undefined,
              factory.createIdentifier(importSpecifier)
            ),
          ])
        ),
        factory.createStringLiteral(module)
      )
}

export function createImportDeclaration(importSpecifier: string, module:string): ts.ImportDeclaration {
  return factory.createImportDeclaration(
      undefined,
      undefined,
      factory.createImportClause(
        false,
        factory.createIdentifier(importSpecifier),
        undefined
      ),
      factory.createStringLiteral(module)
    )
}

export function createNameSpaceImport(namespace: string, module: string): ts.ImportDeclaration {
  return factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamespaceImport(factory.createIdentifier(namespace))
    ),
    factory.createStringLiteral(module)
  )
}

export function existsImportWithNamespace(node: ts.Node, namespace: string){
    let isImportWithName = false
    if(ts.isImportDeclaration(node)){
        isImportWithName = node.importClause?.name?.escapedText === namespace
    }

    return isImportWithName
}

//TODO: improve this to be able also process namespace imports
export function uniqueImports(imports:ts.ImportDeclaration[]): ts.ImportDeclaration[]{
    let uniqueImports: Map<string,string> = new Map<string, string>();

    //get unique imports
    imports.forEach((value) => {
        let module = (<any>value.moduleSpecifier).text
        
        if(value.importClause?.namedBindings)
        {   
            value.importClause?.namedBindings.forEachChild(importSpecifier => {
                let specifier  = (<any>importSpecifier).name.escapedText
                
                if(!uniqueImports.has(specifier)) {
                    uniqueImports.set(specifier, module);
                }
            });
        } else if(value.importClause?.name) {
          let specifier = value.importClause.name.escapedText.toString();
                
          if(!uniqueImports.has(specifier)) {
              uniqueImports.set(specifier, module);
          }
        }
    });

    //group it by module specifier
    let grouppedImports = new Map();
    uniqueImports.forEach((value, key) => {
        const collection = grouppedImports.get(value);
        if (!collection) {
            grouppedImports.set(value, [key]);
        } else {
            collection.push(key);
        }
    });

    //create imports
    var uniqueImportDeclarations = new Array<ts.ImportDeclaration>()
    grouppedImports.forEach((value: Array<string>, key) => {

        let declaration = factory.createImportDeclaration(
            undefined,
            undefined,
            factory.createImportClause(
              false,
              undefined,
              factory.createNamedImports([
                factory.createImportSpecifier(
                  undefined,
                  factory.createIdentifier(value.join(','))
                ),
              ])
            ),
            factory.createStringLiteral(key)
          )

        uniqueImportDeclarations.push(declaration);
    });

    return uniqueImportDeclarations;
}