"use client"

import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import { ComponentProps, useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

type TCardCounter = ComponentProps<"span"> & {
  end: number
  duration: number
}

export default function CardCounter({
  className,
  end,
  duration,
  ...props
}: TCardCounter) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const frame = 16
    let start = 0
    const increment = end / (duration / frame)

    const timer = setInterval(() => {
      start += increment

      if (start >= end) {
        start = end
        clearInterval(timer)
      }

      setValue(Math.floor(start))
    }, frame)
  }, [end, duration])

  return (
    <span
      {...props}
      className={twMerge("transition-all duration-500", className)}
    >
      {ConvertCentsToReal(String(value))}
    </span>
  )
}
