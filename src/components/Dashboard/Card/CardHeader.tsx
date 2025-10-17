import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCardHeader = ComponentProps<"div">

export default function CardHeader({ className, ...props }: TCardHeader) {
  return (
    <div
      {...props}
      className={twMerge("flex items-center justify-between w-full", className)}
    />
  )
}
