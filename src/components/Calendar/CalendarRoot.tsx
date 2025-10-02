import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TRoot = ComponentProps<"div">

export default function CalendarRoot({ className, ...props }: TRoot) {
  return <div {...props} className={twMerge("", className)} />
}
