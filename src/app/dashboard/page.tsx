"use client"

import { Dashboard } from "@/components/Dashboard"
import { useUserContext } from "@/contexts/UserContext"
import useStatistics from "@/hooks/swr/useStatistics"
import { MONTH_SELECT } from "@/utils/Config"
import { ComponentProps, useEffect, useState } from "react"

type Tpage = ComponentProps<"div">

export default function Page({ className, ...props }: Tpage) {
  const { debtsPaidTotal, onDebtsPaidTotal } = useUserContext()

  const currentDate = new Date()
  const [monthSelect, setMonthSelected] = useState<string>(
    MONTH_SELECT[currentDate.getMonth()].value
  )

  const { statistics, isLoading, isError } = useStatistics({
    month: Number(monthSelect),
  })

  useEffect(() => {
    if (statistics) onDebtsPaidTotal(statistics.debts.debtsPaidTotal)
  }, [statistics])

  return (
    <div className="min-h-full p-4 flex flex-col gap-4">
      <Dashboard.CalendarCard
        month={Number(monthSelect) - 1}
        calendarDaysData={statistics?.debts.debtsDays}
        value={monthSelect}
        onChange={setMonthSelected}
      />

      <Dashboard.MonthBalanceCard
        debtsSumTotal={statistics?.debts.debtsTotal || 0}
        debtsPaidTotal={debtsPaidTotal}
      />

      <Dashboard.MonthDebtsCard
        debtsCount={statistics?.debts.debtsCount || 0}
        debtsSumTotal={statistics?.debts.debtsTotal || 0}
      />
    </div>
  )
}
