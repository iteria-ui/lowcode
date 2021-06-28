import { Message } from "."

export interface MessagesProps {
  originalMessages: Message[]
  messageId: string
  newValue: string
  originalLocaleStringJSON: string | undefined
}

export const editExistingMessage = ({
  originalMessages,
  messageId,
  newValue,
  originalLocaleStringJSON,
}: MessagesProps) => {
  for (let i = originalMessages.length - 1; i >= 0; i--) {
    if (originalMessages[i].id === messageId) {
      const before = originalLocaleStringJSON?.substring(
        0,
        originalMessages[i].position.pos + 1
      )
      const after = originalLocaleStringJSON?.substring(
        originalMessages[i].position.end 
      )
      originalLocaleStringJSON = before + JSON.stringify(newValue) + after
    }
  }
  return originalLocaleStringJSON as string
}

export const insertNewMessage = ({
  originalMessages,
  messageId,
  newValue,
  originalLocaleStringJSON,
}: MessagesProps) => {
  for (let i = originalMessages.length - 1; i >= 0; i--) {
    if (
      originalMessages[i].id ===
      originalMessages[originalMessages.length - 1].id
    ) {
      let copyRow
      if (i > 0) {
        copyRow = originalLocaleStringJSON?.substring(
          originalMessages[i - 1].position.end,
          originalMessages[i].position.pos
        )
      } else {
        copyRow = originalLocaleStringJSON?.substring(
          0,
          originalMessages[i].position.pos
        )
      }

      const before = originalLocaleStringJSON?.substring(
        0,
        originalMessages[i].position.end
      )
      const after = originalLocaleStringJSON?.substring(
        originalMessages[i].position.end
      )

      const space = copyRow?.match(/([\s]+)/g)
      const newRow = `${space}${JSON.stringify(messageId)}: ${JSON.stringify(newValue)}`
      originalLocaleStringJSON = `${before},` + newRow + after
    }
  }
  return originalLocaleStringJSON as string
}

export const createFirstMessage = (messageId: string, newValue: string) => {
  return `{\n  ${JSON.stringify(messageId)}: ${JSON.stringify(newValue)}\n}`
}