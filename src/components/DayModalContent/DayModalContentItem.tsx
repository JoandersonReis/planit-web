"use client"

import { useUserContext } from "@/contexts/UserContext"
import { DebtsService } from "@/service/Debts"
import { CONFIG } from "@/utils/Config"
import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import clsx from "clsx"
import { ComponentProps, useState } from "react"
import { useSWRConfig } from "swr"
import { twMerge } from "tailwind-merge"
import { DayModalContent } from "."

type TDayModalContentItem = ComponentProps<"div"> & {
  paid: boolean
  value: string
  debtId: string
  monthSelected: number
}

export default function DayModalContentItem({
  className,
  paid,
  value,
  debtId,
  children,
  monthSelected,
  ...props
}: TDayModalContentItem) {
  const debtService = new DebtsService()
  const [show, setShow] = useState(false)
  const { onDebtsPaidTotal, debtsPaidTotal } = useUserContext()
  const { mutate } = useSWRConfig()

  async function handlePay() {
    await debtService.pay(debtId, !paid)

    onDebtsPaidTotal(
      !paid ? debtsPaidTotal + Number(value) : debtsPaidTotal - Number(value)
    )
    await mutate([CONFIG.CACHE_KEYS.STATISTICS, monthSelected + 1])
  }

  return (
    <li className="w-full">
      <div
        tabIndex={0}
        {...props}
        className={twMerge(
          clsx(
            "flex items-center !justify-between p-2 rounded-lg w-full relative overflow-hidden cursor-pointer",
            {
              "bg-amber-800": !paid,
              "bg-emerald-500": paid,
            }
          ),
          className
        )}
        onClick={() => setShow(!show)}
      >
        {children}

        <button
          onClick={handlePay}
          className={clsx(
            "!w-full !h-full !absolute top-0 right-0 transition-all duration-300",
            {
              "bg-emerald-800": !paid,
              "bg-amber-400": paid,
              "translate-y-0": show,
              "translate-y-[100px]": !show,
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
