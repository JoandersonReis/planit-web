import Button from "@/components/Button"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TSideMenuButton = ComponentProps<"button">

export default function SideMenuToggleButton({
  className,
  ...props
}: TSideMenuButton) {
  return <Button {...props} className={twMerge("w-8 !h-8", className)} />
}
