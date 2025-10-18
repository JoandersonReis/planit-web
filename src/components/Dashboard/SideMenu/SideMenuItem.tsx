import clsx from "clsx"
import Link from "next/link"
import { ComponentProps, ElementType } from "react"
import { twMerge } from "tailwind-merge"

type TSideMenuItem = ComponentProps<"a"> & {
  href: string
  actived?: boolean
  Icon: ElementType
  text: string
}

export default function SideMenuItem({
  className,
  actived,
  Icon,
  text,
  ...props
}: TSideMenuItem) {
  return (
    <li className="w-full">
      <Link
        {...props}
        className={twMerge(
          clsx(
            "relative flex items-center justify-between group bg-transparent",
            {
              "before:content-[''] before:h-10 before:rounded-bl-lg before:rounded-tr-lg before:w-[10px] before:bg-primary before:absolute before:left-0 pl-[18px]":
                actived,
            }
          ),
          className
        )}
      >
        <Icon
          size={20}
          className={clsx(actived ? "text-primary" : "text-white/40")}
        />

        <span className="uppercase text-lg">{text}</span>
      </Link>
    </li>
  )
}
