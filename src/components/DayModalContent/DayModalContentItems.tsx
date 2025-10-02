import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TDayModalContentItems = ComponentProps<"ul">

export default function DayModalContentItems({
  className,
  ...props
}: TDayModalContentItems) {
  return (
    <ul
      {...props}
      className={twMerge("flex flex-col gap-1 w-full", className)}
    />
  )
}
