import { Dialog } from "radix-ui"
import { twMerge } from "tailwind-merge"

type TDayModalContentTitle = Dialog.DialogTitleProps

export default function DayModalContentTitle({
  className,
  ...props
}: TDayModalContentTitle) {
  return (
    <Dialog.Title {...props} className={twMerge("font-title", className)} />
  )
}
