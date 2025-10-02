import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDayModalContentItemValue = ComponentProps<"span"> & {
  value: string
}

export default function DayModalContentItemValue({
  className,
  value,
  ...props
}: TDayModalContentItemValue) {
  return (
    <span {...props} className={twMerge("", className)}>
      {ConvertCentsToReal(value)}
    </span>
  )
}
