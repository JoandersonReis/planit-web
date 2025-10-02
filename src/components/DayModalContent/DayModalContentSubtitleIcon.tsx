import { ComponentProps, ElementType } from "react"
import { twMerge } from "tailwind-merge"

type TDayModalContentSubtitleIcon = ComponentProps<"div"> & {
  Icon: ElementType
}

export default function DayModalContentSubtitleIcon({
  className,
  Icon,
  ...props
}: TDayModalContentSubtitleIcon) {
  return (
    <div
      {...props}
      className={twMerge("flex-center h-5 w-5 rounded-sm", className)}
    >
      <Icon size={14} />
    </div>
  )
}
