"use client"

import { Dashboard } from "@/components/Dashboard"
import { StatisticsService } from "@/service/Statistics"
import { TStatisticsResponse } from "@/service/types"
import { MONTH_SELECT } from "@/utils/Config"
import { ComponentProps, useEffect, useState } from "react"

type Tpage = ComponentProps<"div">

export default function Page({ className, ...props }: Tpage) {
  const currentDate = new Date()
  const [monthSelect, setMonthSelected] = useState<string>(
    MONTH_SELECT[currentDate.getMonth()].value
  )
  var [statistics, setStatistics] = useState<TStatisticsResponse>()

  const statisticsService = new StatisticsService()

  async function loadStatistics() {
    const response = await statisticsService.find(Number(monthSelect))

    setStatistics(response)
  }

  useEffect(() => {
    loadStatistics()
  }, [monthSelect])

  return (
    <div className="h-[100vh] p-4 flex flex-col gap-4">
      <Dashboard.CalendarCard
        month={Number(monthSelect) - 1}
        calendarDaysData={statistics?.debts.debtsDays}
        value={monthSelect}
        onChange={setMonthSelected}
      />

      <Dashboard.MonthBalanceCard
        debtsTotal={statistics?.debts.debtsTotal || 0}
      />

      <Dashboard.MonthDebtsCard
        debtsCount={statistics?.debts.debtsCount || 0}
        debtsSumTotal={statistics?.debts.debtsTotal || 0}
      />
    </div>
  )
}
