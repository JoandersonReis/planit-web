import { Dialog } from "radix-ui"
import { twMerge } from "tailwind-merge"

type TDayModalContentDescription = Dialog.DialogDescriptionProps

export default function DayModalContentDescription({
  className,
  ...props
}: TDayModalContentDescription) {
  return (
    <Dialog.Description
      {...props}
      className={twMerge("text-sm opacity-30", className)}
    />
  )
}
