import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type TFormLabel = ComponentProps<"label"> & {
  required?: boolean
}

export default function FormLabel({
  className,
  children,
  required,
  ...props
}: TFormLabel) {
  return (
    <label
      {...props}
      className={twMerge("transition-colors text-sm", className)}
    >
      {children} {required && <span className="text-red-800">*</span>}
    </label>
  )
}
