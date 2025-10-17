import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMessageRoot = ComponentProps<"button">

export default function MessageRoot({ className, ...props }: TMessageRoot) {
  return (
    <button
      {...props}
      className={twMerge("w-[90%] rounded-lg flex-center z-50", className)}
    />
  )
}
