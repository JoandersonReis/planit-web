import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCardContent = ComponentProps<"div">

export default function CardContent({ className, ...props }: TCardContent) {
  return (
    <div
      {...props}
      className={twMerge("flex items-center gap-6 flex-col w-full", className)}
    />
  )
}
