"use client"

import { TDayData } from "@/service/types"
import { CompareDate } from "@/utils/CompareDate"
import { MONTHS } from "@/utils/Config"
import { MountCalendarDays } from "@/utils/MountCalendarDays"
import { TMonth } from "@/utils/types"
import { useEffect, useState } from "react"
import { Calendar } from "."

type TCalendarProps = {
  calendarMonthData?: TDayData[]
  month: number
}

export default function CalendarDefault({
  calendarMonthData,
  month,
}: TCalendarProps) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"]
  const [monthSelected, setMonthSelected] = useState<TMonth>(MONTHS[month])

  useEffect(() => {
    setMonthSelected(MONTHS[month])
  }, [month])

  return (
    <Calendar.Root>
      <Calendar.Content>
        <Calendar.Week>
          {week.map((item, index) => (
            <Calendar.WeekDays key={`${item}_${index}`}>
              {item}
            </Calendar.WeekDays>
          ))}
        </Calendar.Week>
        {calendarMonthData ? (
          <Calendar.Days>
            {MountCalendarDays(monthSelected).map((item, index) => (
              <Calendar.Day
                data={calendarMonthData.find((calendar) =>
                  CompareDate(
                    item.date,
                    calendar.date,
                    calendar.debts.findIndex((debt) => debt.repeat) > -1
                  )
                )}
                dayType={item.type}
                key={index}
              >
                {item.date.getDate()}
              </Calendar.Day>
            ))}
          </Calendar.Days>
        ) : (
          <Calendar.Loading />
        )}
      </Calendar.Content>
    </Calendar.Root>
  )
}
