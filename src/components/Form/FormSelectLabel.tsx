import clsx from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Form } from "."
import { TFormSelect } from "./FormSelect"

type TFormSelectLabel = ComponentProps<"select"> &
  TFormSelect & {
    label: string
    required?: boolean
    value: string
    error?: string
  }

export default function FormSelectLabel({
  className,
  label,
  value,
  required,
  error,
  ...props
}: TFormSelectLabel) {
  return (
    <div>
      <div className="relative my-2 group flex items-center group-focus-within:border-primary flex-1">
        <Form.Label
          required={required}
          htmlFor={label}
          className={clsx(
            "absolute group-focus-within:text-xs group-focus-within:top-[-8px] left-2 bg-darkgray px-1 text-white/20 group-focus-within:text-primary uppercase",
            {
              "top-[-8px] text-xs": value.length > 0,
            }
          )}
        >
          {label}
        </Form.Label>

        <Form.Select
          required={required}
          {...props}
          id={label}
          className={twMerge(className, "group-focus-within:border-primary")}
        />
      </div>

      {error && (
        <small className="text-red-500 text-xs font-sans">{error}</small>
      )}
    </div>
  )
}
