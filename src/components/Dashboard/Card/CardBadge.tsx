import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCardBadge = ComponentProps<"div">

export default function CardBadge({ className, ...props }: TCardBadge) {
  return (
    <div
      {...props}
      className={twMerge(
        "h-8 w-8 bg-primary/30 !border-2 border-primary flex-center rounded-lg color-primary text-primary",
        className
      )}
    />
  )
}
