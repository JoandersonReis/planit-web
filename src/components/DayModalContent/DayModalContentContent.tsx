import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDayModalContentContent = ComponentProps<"div">

export default function DayModalContentContent({
  className,
  ...props
}: TDayModalContentContent) {
  return (
    <div {...props} className={twMerge("flex flex-col gap-4", className)} />
  )
}
