import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type THeaderContainer = ComponentProps<"section">

export default function HeaderContainer({
  className,
  ...props
}: THeaderContainer) {
  return (
    <section
      {...props}
      className={twMerge("p-4 max-w-[1280px] xl:p-0", className)}
    />
  )
}
