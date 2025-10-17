import { DebtsService } from "@/service/Debts"
import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import clsx from "clsx"
import { ComponentProps, useState } from "react"
import { twMerge } from "tailwind-merge"
import { DayModalContent } from "."

type TDayModalContentItem = ComponentProps<"div"> & {
  paid: boolean
  value: string
  debtId: string
}

export default function DayModalContentItem({
  className,
  paid,
  value,
  debtId,
  children,
  ...props
}: TDayModalContentItem) {
  const debtService = new DebtsService()
  const [paidState, setPaidState] = useState(paid)
  const [show, setShow] = useState(false)

  async function handlePay() {
    await debtService.pay(debtId, !paid)

    setPaidState((state) => !state)
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
              "bg-amber-800": !paidState,
              "bg-emerald-500": paidState,
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
              "bg-emerald-800": !paidState,
              "bg-amber-400": paidState,
              "translate-y-0": show,
              "translate-y-[100px]": !show,
            }
          )}
        >
          <DayModalContent.ItemTitle>
            {paidState
              ? "Não foi pago?"
              : `Deseja pagar (${ConvertCentsToReal(value)})?`}
          </DayModalContent.ItemTitle>
        </button>
      </div>
    </li>
  )
}
