import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TContent = ComponentProps<"div">

export default function CalendarContent({ className, ...props }: TContent) {
  return (
    <div {...props} className={twMerge("flex flex-col gap-2", className)} />
  )
}
