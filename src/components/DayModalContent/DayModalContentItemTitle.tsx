import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDarModalContentItemTitle = ComponentProps<"strong">

export default function DayModalContentItemTitle({
  className,
  ...props
}: TDarModalContentItemTitle) {
  return <strong {...props} className={twMerge("uppercase", className)} />
}
