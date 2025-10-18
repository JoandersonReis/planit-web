import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideMenuContainer = ComponentProps<"nav">

export default function SideMenuContainer({
  className,
  ...props
}: TSideMenuContainer) {
  return <nav {...props} className={twMerge("", className)} />
}
