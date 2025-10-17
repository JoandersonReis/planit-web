"use client"

import { Eye, EyeClosed } from "lucide-react"
import { ComponentProps, useState } from "react"
import { Form } from "."
import { TFormInput } from "./FormInput"

type TFormInputLabelPassword = ComponentProps<"input"> &
  TFormInput & {
    error?: string
  }

export default function FormInputLabelPassword({
  className,
  error,
  ...props
}: TFormInputLabelPassword) {
  const [isShow, setIsShow] = useState(false)

  return (
    <div className="w-full relative mb-6">
      <div className="flex items-center w-full gap-1">
        <Form.InputLabel
          label="Senha"
          type={isShow ? "text" : "password"}
          error={undefined}
          {...props}
        />

        <button
          type="button"
          onClick={() => setIsShow(!isShow)}
          className="bg-primary w-10 h-10 rounded-lg flex-center "
        >
          {isShow ? <Eye size={16} /> : <EyeClosed size={16} />}
        </button>
      </div>

      {error && (
        <small className="text-red-500 text-xs font-sans absolute">
          {error}
        </small>
      )}
    </div>
  )
}
