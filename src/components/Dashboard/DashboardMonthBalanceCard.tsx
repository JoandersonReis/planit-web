"use client"

import { useUserContext } from "@/contexts/UserContext"
import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import clsx from "clsx"
import { ArrowDown, ArrowUp, Wallet } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Card } from "./Card"

type TDashboardMonthBalanceCard = ComponentProps<"section"> & {
  debtsPaidTotal: number
  debtsSumTotal: number
}

export default function DashboardMonthBalanceCard({
  className,
  debtsPaidTotal,
  debtsSumTotal,
  ...props
}: TDashboardMonthBalanceCard) {
  const { balance } = useUserContext()
  const balanceMonth = balance - debtsSumTotal

  return (
    <Card.Root {...props} className={twMerge("", className)}>
      <Card.Content className="items-start">
        <Card.Header>
          <Card.Title
            badgeStyle="bg-emerald-500/30 border-emerald-500 text-emerald-500"
            Icon={Wallet}
          >
            BALANÇO MENSAL
          </Card.Title>

          <span className="text-light-gray">
            {ConvertCentsToReal(String(balance))}
          </span>
        </Card.Header>

        <div className="flex items-center">
          <div className="flex items-start gap-2 flex-col pr-4 border-r-2 border-light-gray/20">
            <Card.Subtitle>SALDO RESTANTE</Card.Subtitle>
            <strong
              className={clsx(
                "text-3xl flex items-center gap-2 font-normal",
                balanceMonth > 0 ? "text-emerald-500" : "text-red-500"
              )}
            >
              {balanceMonth < 0 ? (
                <ArrowDown size={16} />
              ) : (
                <ArrowUp size={16} />
              )}

              <Card.Counter
                duration={1000}
                end={balanceMonth < 0 ? balanceMonth * -1 : balanceMonth}
              />
            </strong>
          </div>

          <div className="flex items-start gap-2 flex-col pl-4">
            <Card.Subtitle>TOTAL PAGO</Card.Subtitle>

            <strong className="text-3xl flex items-center gap-2 font-normal *:text-emerald-500">
              <Card.Counter duration={1000} end={debtsPaidTotal} />
            </strong>
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  )
}
