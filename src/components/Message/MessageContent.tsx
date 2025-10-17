import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMessageContent = ComponentProps<"div">

export default function MessageContent({
  className,
  ...props
}: TMessageContent) {
  return <div {...props} className={twMerge("flex-center", className)} />
}
