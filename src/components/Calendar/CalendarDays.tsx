import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCalendarDays = ComponentProps<"ul">

export default function CalendarDays({ className, ...props }: TCalendarDays) {
  return (
    <ul {...props} className={twMerge("grid grid-cols-7 gap-2", className)} />
  )
}
