import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormRoot = ComponentProps<"form">

export default function FormRoot({ className, ...props }: TFormRoot) {
  return (
    <form
      autoComplete="off"
      {...props}
      className={twMerge(
        "bg-darkgray/40 p-8 rounded-lg border-[3px] border-white/30 flex flex-col gap-2",
        className
      )}
    />
  )
}
