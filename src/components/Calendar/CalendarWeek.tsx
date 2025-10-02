import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCalendarWeek = ComponentProps<"header">

export default function CalendarWeek({ className, ...props }: TCalendarWeek) {
  return (
    <header
      {...props}
      className={twMerge("grid grid-cols-7 gap-4", className)}
    />
  )
}
