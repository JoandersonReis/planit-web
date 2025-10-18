import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideMenuRoot = ComponentProps<"div">

export default function SideMenuRoot({ className, ...props }: TSideMenuRoot) {
  return <div {...props} className={twMerge("", className)} />
}
