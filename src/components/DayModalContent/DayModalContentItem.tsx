import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import clsx from "clsx"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { DayModalContent } from "."

type TDayModalContentItem = ComponentProps<"div"> & {
  paid: boolean
  value: string
}

export default function DayModalContentItem({
  className,
  paid,
  value,
  children,
  ...props
}: TDayModalContentItem) {
  return (
    <li className="w-full">
      <div
        tabIndex={0}
        {...props}
        className={twMerge(
          "flex items-center !justify-between p-2 rounded-lg w-full relative overflow-hidden cursor-pointer group",
          className
        )}
      >
        {children}

        <button
          className={clsx(
            "!w-full !h-full !absolute top-0 right-0 translate-y-[100px] transition-all duration-300 group-focus:translate-y-0",
            {
              "bg-emerald-800": !paid,
              "bg-amber-400": paid,
            }
          )}
        >
          <DayModalContent.ItemTitle>
            {paid
              ? "Não foi pago?"
              : `Deseja pagar (${ConvertCentsToReal(value)})?`}
          </DayModalContent.ItemTitle>
        </button>
      </div>
    </li>
  )
}
