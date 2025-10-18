import { Menu } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import Button from "../Button"

type THeaderMenuButton = ComponentProps<"button">

export default function HeaderMenuButton({
  className,
  ...props
}: THeaderMenuButton) {
  return (
    <Button {...props} className={twMerge("p-0 w-8", className)}>
      <Menu size={16} />
    </Button>
  )
}
