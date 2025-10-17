import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMessageText = ComponentProps<"span">

export default function MessageText({ className, ...props }: TMessageText) {
  return <span {...props} className={twMerge("uppercase text-sm", className)} />
}
