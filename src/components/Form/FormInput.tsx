import { ComponentProps } from "react"
import { UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"

export type TFormInput = ComponentProps<"input"> & {
  register?: UseFormRegister<any>
  name: string
}

export default function FormInput({
  className,
  name,
  register,
  ...props
}: TFormInput) {
  return register ? (
    <input
      {...register(name)}
      {...props}
      className={twMerge(
        "h-10 w-full outline-0 px-2 border-2 bg-transaprent border-white/20 rounded-lg",
        className
      )}
    />
  ) : (
    <input
      autoComplete="off"
      {...props}
      className={twMerge(
        "h-10 w-full outline-0 px-2 border-2 bg-transaprent border-white/20 rounded-lg",
        className
      )}
    />
  )
}
