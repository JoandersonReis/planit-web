import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormTitle = ComponentProps<"legend">

export default function FormTitle({ className, ...props }: TFormTitle) {
  return (
    <legend
      {...props}
      className={twMerge("font-mono tracking-[15px] flex", className)}
    >
      {props.children}
    </legend>
  )
}
