import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"

export type TFormSelect = ComponentProps<"select"> & {
  register?: UseFormRegister<any>
  name: string
}

export default function FormSelect({
  className,
  register,
  name,
  ...props
}: TFormSelect) {
  return register ? (
    <select
      {...props}
      className={twMerge(
        "h-10 w-full outline-0 px-2 border-2 bg-darkgray border-white/20 rounded-lg",
        className
      )}
      {...register(name)}
    />
  ) : (
    <select
      {...props}
      name={name}
      className={twMerge(
        "h-10 w-full outline-0 px-2 border-2 bg-darkgray border-white/20 rounded-lg",
        className
      )}
    />
  )
}
