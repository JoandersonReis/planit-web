export type TUserContext = {
  balance: number
  name: string
}

import { ReactNode } from "react"

export type TMessageType = "WARNING" | "SUCCESS"

export type TMessage = {
  type: TMessageType
  text: string
}

export type TMessagesContext = {
  messages: TMessage[]
  onMessage: (message: TMessage) => void
}

export type TProvider = {
  children: ReactNode
}
