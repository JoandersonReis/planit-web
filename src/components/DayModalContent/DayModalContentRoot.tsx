import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDayModalContentRoot = ComponentProps<"div">

export default function DayModalContentRoot({
  className,
  ...props
}: TDayModalContentRoot) {
  return <div {...props} className={twMerge("", className)} />
}
