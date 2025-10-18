import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCardSubtitle = ComponentProps<"h3">

export default function CardSubtitle({ className, ...props }: TCardSubtitle) {
  return (
    <h3
      {...props}
      className={twMerge(
        "text-xs uppercase text-light-gray !font-sans",
        className
      )}
    />
  )
}
