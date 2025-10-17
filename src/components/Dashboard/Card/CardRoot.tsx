import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TCardRoot = ComponentProps<"section">

export default function CardRoot({ className, ...props }: TCardRoot) {
  return (
    <section
      {...props}
      className={twMerge("bg-dark-gray/50 rounded-lg p-4 w-full", className)}
    />
  )
}
