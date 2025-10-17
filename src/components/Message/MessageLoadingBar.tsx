import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMessageLoadingBar = ComponentProps<"div"> & {
  time: number
}

export default function MessageLoadingBar({
  className,
  time,
  ...props
}: TMessageLoadingBar) {
  return (
    <div
      {...props}
      style={{ animationDuration: `${time}s` }}
      className={twMerge(`bg-white h-[4px] animate-loading-bar`, className)}
    />
  )
}
