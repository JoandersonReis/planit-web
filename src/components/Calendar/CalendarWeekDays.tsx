import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCalendarWeekDays = ComponentProps<"strong">

export default function CalendarWeekDays({
  className,
  ...props
}: TCalendarWeekDays) {
  return (
    <strong
      {...props}
      className={twMerge("h-8 w-8 flex-center font-sans", className)}
    />
  )
}
