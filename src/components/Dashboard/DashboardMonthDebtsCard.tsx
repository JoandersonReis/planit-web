import { ConvertCentsToReal } from "@/utils/ConvertCentsToReal"
import { BadgeDollarSign } from "lucide-react"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { Card } from "./Card"

type TDashboardMonthDebtsCard = ComponentProps<"div"> & {
  debtsSumTotal: number
  debtsCount: number
}

export default function DashboardMonthDebtsCard({
  className,
  debtsSumTotal,
  debtsCount,
  ...props
}: TDashboardMonthDebtsCard) {
  return (
    <Card.Root {...props} className={twMerge("", className)}>
      <Card.Content className="items-start">
        <Card.Header>
          <Card.Title Icon={BadgeDollarSign}>DÍVIDAS MENSAL</Card.Title>

          <span className="text-light-gray h-8 w-8 flex-center rounded-lg bg-dark-gray">
            {debtsCount}
          </span>
        </Card.Header>

        <strong className="text-3xl flex items-center gap-2 font-normal text-red-500">
          {ConvertCentsToReal(String(debtsSumTotal))}
        </strong>
      </Card.Content>
    </Card.Root>
  )
}
