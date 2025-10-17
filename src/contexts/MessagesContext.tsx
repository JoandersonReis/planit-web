"use client"

import { createContext, useContext, useState } from "react"
import { TMessage, TMessagesContext, TProvider } from "./types"

export const MessagesContext = createContext({} as TMessagesContext)

export function MessagesProvider({ children }: TProvider) {
  const [messages, setMessages] = useState<TMessage[]>([])

  function onMessage(message: TMessage) {
    setMessages((state) => [message, ...state])
  }

  return (
    <MessagesContext.Provider value={{ messages, onMessage }}>
      {children}
    </MessagesContext.Provider>
  )
}

export function useMessageContext() {
  const context = useContext(MessagesContext)

  return context
}
