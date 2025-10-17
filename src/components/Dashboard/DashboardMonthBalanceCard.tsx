"use client"

import { useUserContext } from "@/contexts/UserContext"
import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import clsx from "clsx"
import { ArrowDown, ArrowUp, Wallet } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Card } from "./Card"

type TDashboardMonthBalanceCard = ComponentProps<"section"> & {
  debtsTotal: number
}

export default function DashboardMonthBalanceCard({
  className,
  debtsTotal,
  ...props
}: TDashboardMonthBalanceCard) {
  const { balance } = useUserContext()
  const balanceMonth = balance - debtsTotal

  return (
    <Card.Root {...props} className={twMerge("", className)}>
      <Card.Content className="items-start">
        <Card.Header>
          <Card.Title
            badgeStyle="bg-emerald-500/30 border-emerald-500 text-emerald-500"
            Icon={Wallet}
          >
            SALDO MENSAL
          </Card.Title>

          <span className="text-light-gray">{ConvertCentsToReal("15423")}</span>
        </Card.Header>

        <strong
          className={clsx(
            "text-3xl flex items-center gap-2 font-normal",
            balanceMonth > 0 ? "text-emerald-500" : "text-red-500"
          )}
        >
          {balanceMonth < 0 ? <ArrowDown size={16} /> : <ArrowUp size={16} />}

          {ConvertCentsToReal(String(balanceMonth))}
        </strong>
      </Card.Content>
    </Card.Root>
  )
}
