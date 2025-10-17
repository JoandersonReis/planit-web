"use client"

import clsx from "clsx"
import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"
import { Form } from "."
import { TFormInput } from "./FormInput"

type TFormInputLabel = ComponentProps<"input"> &
  TFormInput & {
    label: string
    required?: boolean
    error?: string
  }

export default function FormInputLabel({
  className,
  label,
  required,
  error,
  ...props
}: TFormInputLabel) {
  const [value, setValue] = useState("")

  return (
    <div className="my-2 flex-1">
      <div className="relative group flex items-center group-focus-within:border-primary">
        <Form.Label
          htmlFor={label}
          required={required}
          className={clsx(
            "absolute group-focus-within:text-xs group-focus-within:border-2 group-focus-within:border-primary group-focus-within:top-[-12px] left-2 bg-dark-gray px-2 text-white/20 uppercase rounded-lg group-focus-within:text-white group-focus-within:px-4",
            {
              "top-[-8px] text-xs": value.length > 0,
            }
          )}
        >
          {label}
        </Form.Label>

        <Form.Input
          required={required}
          {...props}
          id={label}
          onChange={(e) => setValue(e.target.value)}
          className={twMerge(className, "group-focus-within:border-primary")}
        />
      </div>

      {error && (
        <small className="text-red-500 text-xs font-sans">{error}</small>
      )}
    </div>
  )
}
