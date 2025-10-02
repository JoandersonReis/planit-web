"use client"

import { TDayData } from "@/service/types"
import { CompareDate } from "@/utils/CompareDate"
import { MONTHS } from "@/utils/Config"
import { MountCalendarDays } from "@/utils/MountCalendarDays"
import { TMonth } from "@/utils/types"
import { useState } from "react"
import { Calendar } from "."

type TCalendarProps = {
  calendarMonthData: TDayData[]
}

export default function CalendarDefault({ calendarMonthData }: TCalendarProps) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"]
  const [months, setMonths] = useState<TMonth[]>(MONTHS)
  const [monthSelected, setMonthSelected] = useState<TMonth>(
    months.filter((item) => item.selected)[0]
  )

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

        <Calendar.Days>
          {MountCalendarDays(monthSelected).map((item, index) => (
            <Calendar.Day
              data={calendarMonthData.find((calendar) =>
                CompareDate(item.date, calendar.date)
              )}
              dayType={item.type}
              key={index}
            >
              {item.date.getDate()}
            </Calendar.Day>
          ))}
        </Calendar.Days>
      </Calendar.Content>
    </Calendar.Root>
  )
}
