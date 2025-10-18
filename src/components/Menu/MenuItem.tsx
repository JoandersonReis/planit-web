import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMenuItem = ComponentProps<"li">

export default function MenuItem({ className, ...props }: TMenuItem) {
  return <li {...props} className={twMerge("", className)} />
}
