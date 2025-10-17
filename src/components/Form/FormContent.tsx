import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormContent = ComponentProps<"fieldset">

export default function FormContent({ className, ...props }: TFormContent) {
  return <fieldset {...props} className={twMerge("", className)} />
}
