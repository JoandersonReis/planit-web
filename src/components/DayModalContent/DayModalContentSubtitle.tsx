import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDayModalContentSubtitle = ComponentProps<"h3">

export default function DayModalContentSubtitle({
  className,
  ...props
}: TDayModalContentSubtitle) {
  return (
    <h3
      {...props}
      className={twMerge(
        "flex items-center gap-2 uppercase text-lg",
        className
      )}
    />
  )
}
