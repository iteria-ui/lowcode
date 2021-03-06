import { createAst } from "../ast";
import { SourceFile, ScriptTarget, ScriptKind } from "typescript"
import { Message } from ".";


export function parseLocaleJSON(localeSourceCode: string, languageLocale = "en") {
    const localeAst = createAst(localeSourceCode, ScriptTarget.ESNext, ScriptKind.JSON)
    if (localeAst) {
      return parseLocaleAST(localeAst, languageLocale)
    }
}

export function parseLocaleAST(ast: SourceFile, languageLocale = "en") {
  let localeMessages: Message[] = []
  ast?.forEachChild((child: any) => {
    child?.expression?.properties?.forEach((property: any) => {
      let locale = {
        id: property.name.text,
        value: property.initializer?.text,
        locale: languageLocale,
        position: { pos: property.initializer?.pos, end: property.initializer?.end }
      }
      localeMessages = [...localeMessages, locale]
    })
  })
  return localeMessages
}

// it preserves original JSON formatting
export function patchLocaleJSON(localeFile: string, changedMessages: Message[], originalMessages: Message[]) {
  for (let i = changedMessages.length; i >= 0; i--) {
    if (changedMessages[i]?.value == originalMessages[i]?.value) {
      console.log("Equal")
    } else {
      const before = localeFile.substring(0, originalMessages[i].position.pos + 1)
      const after = localeFile.substring(originalMessages[i].position.end - 1)
      localeFile = before + changedMessages[i].value + after
    }
  }

  return localeFile
}
