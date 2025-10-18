import { ComponentProps } from "react"

type TCalendarLoading = ComponentProps<"div">

export default function CalendarLoading({
  className,
  ...props
}: TCalendarLoading) {
  const days = new Array(35).fill("")

  return (
    <div className="grid grid-cols-7 gap-2 animate-pulse ">
      {days.map((item, index) => (
        <div key={index} className="w-10 h-10 bg-dark-gray rounded-lg" />
      ))}
    </div>
  )
}
