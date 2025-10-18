import { TUserLogin } from "@/service/types"
import { ReactNode } from "react"

export type TUserContext = {
  balance: number
  name: string
  onUser: (value: TUserLogin) => void
  debtsPaidTotal: number
  onDebtsPaidTotal: (value: number) => void
}

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
