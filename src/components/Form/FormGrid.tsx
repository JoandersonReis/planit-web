import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormGrid = ComponentProps<"div">

export default function FormGrid({ className, ...props }: TFormGrid) {
  return (
    <div {...props} className={twMerge("grid grid-cols-2 gap-2", className)} />
  )
}
