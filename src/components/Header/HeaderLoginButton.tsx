"use client"

import { LogIn } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type THeaderLoginButton = ComponentProps<"a"> & {
  href: string
}

export default function HeaderLoginButton({
  className,
  ...props
}: THeaderLoginButton) {
  const navigation = useRouter()

  return (
    <Link
      {...props}
      className={twMerge(
        "w-8 p-0 h-8 flex items-center justify-center rounded-xl border-2 border-white primary-gradient",
        className
      )}
    >
      <LogIn size={16} />
    </Link>
  )
}
