import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import Button from "../Button"

type TToggleButton = ComponentProps<"button">

export default function MenuToggleButton({
  className,
  ...props
}: TToggleButton) {
  return <Button {...props} className={twMerge("p-0 w-8", className)} />
}
