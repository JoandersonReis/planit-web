import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMenuRoot = ComponentProps<"div">

export default function MenuRoot({ className, ...props }: TMenuRoot) {
  return <div {...props} className={twMerge("", className)} />
}
