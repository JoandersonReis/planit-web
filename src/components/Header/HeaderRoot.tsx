import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type THeaderRoot = ComponentProps<"header">

export default function HeaderRoot({ className, ...props }: THeaderRoot) {
  return <header {...props} className={twMerge("", className)} />
}
