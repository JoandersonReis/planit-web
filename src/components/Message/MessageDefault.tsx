"use client"
import clsx from "clsx"
import { useContext, useEffect, useState } from "react"
import { Message } from "."

import { MessagesContext } from "@/contexts/MessagesContext"
import { TMessage } from "@/contexts/types"

export default function MessageDefault() {
  const { messages } = useContext(MessagesContext)
  const [message, setMessage] = useState<TMessage>()

  useEffect(() => {
    setMessage(messages[0])

    setTimeout(() => {
      setMessage(undefined)
    }, 5000)
  }, [messages])

  return message ? (
    <Message.Root
      onClick={() => setMessage(undefined)}
      className={clsx(
        "fixed top-5 translate-x-[5%] flex-col overflow-hidden animate-scroll-down",
        {
          "bg-emerald-500": message.type == "SUCCESS",
          "bg-amber-800": message.type == "WARNING",
        }
      )}
    >
      <Message.Content className="p-2 w-full">
        <Message.Text>{message.text}</Message.Text>
      </Message.Content>
      <Message.LoadingBar time={5} />
    </Message.Root>
  ) : (
    <></>
  )
}
