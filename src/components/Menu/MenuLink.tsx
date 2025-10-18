import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TMenuLink = ComponentProps<"a"> & {
  href: string
}

export default function MenuLink({ className, ...props }: TMenuLink) {
  return (
    <Link
      {...props}
      className={twMerge(
        "w-full after:content-[''] after:absolute relative after:w-0 after:h-[1px] after:left-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:bottom-0 py-2 after:rounded-3xl hover:after:w-full after:transition-all after:duration-500",
        className
      )}
    />
  )
}
