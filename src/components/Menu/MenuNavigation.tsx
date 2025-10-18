import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMenuNavigation = ComponentProps<"nav">

export default function MenuNavigation({
  className,
  ...props
}: TMenuNavigation) {
  return <nav {...props} className={twMerge("", className)} />
}
