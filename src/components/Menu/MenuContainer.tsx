import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMenuContainer = ComponentProps<"ul">

export default function MenuContainer({ className, ...props }: TMenuContainer) {
  return <ul {...props} className={twMerge("", className)} />
}
