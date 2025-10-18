import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideMenuOptions = ComponentProps<"ul">

export default function SideMenuOptions({
  className,
  ...props
}: TSideMenuOptions) {
  return <ul {...props} className={twMerge("", className)} />
}
