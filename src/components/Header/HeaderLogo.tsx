import Image from "next/image"
import Link from "next/link"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type THeaderLogo = ComponentProps<"a"> & {
  href: string
}

export default function HeaderLogo({ className, ...props }: THeaderLogo) {
  return (
    <Link
      {...props}
      className={twMerge(
        "w-[39px] h-[45px] relative hover:grayscale-100",
        className
      )}
    >
      <Image
        src="/assets/images/logo.svg"
        objectFit="contain"
        fill
        alt="Logo Spot"
      />
    </Link>
  )
}
