import { MONTHS } from "@/utils/Config"
import { TMonth, TMonthFormated } from "./types"

export function MountCalendarDays(monthSelected: TMonth): TMonthFormated[] {
  const daysArr = Array.from(
    { length: monthSelected.days },
    (item, index) => index + 1
  )

  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  date.setMonth(monthSelected.month)
  date.setDate(1)

  const firstDayWeek = date.getDay()

  const previusMonth = getPreviousMonth(monthSelected)
  const gridDaysLength = firstDayWeek + 1 + monthSelected.days
  const gridDays = Array.from(
    {
      length: Math.ceil(gridDaysLength / 7) * 7,
    },
    (item, index) => index + 1
  )

  const daysFormated: TMonthFormated[] = gridDays.map((item, index) => {
    var currentDate = new Date(date)

    if (
      index >= firstDayWeek &&
      index <= monthSelected.days + firstDayWeek - 1
    ) {
      currentDate.setDate(item - firstDayWeek)

      return { date: currentDate, type: "MONTH" }
    }

    if (index < firstDayWeek) {
      currentDate.setMonth(previusMonth.month)
      currentDate.setDate(item + previusMonth.days - firstDayWeek)

      return { date: currentDate, type: "NOMONT" }
    }

    currentDate.setMonth(currentDate.getMonth() + 1)
    currentDate.setDate(item - firstDayWeek - monthSelected.days)
    return { date: currentDate, type: "NOMONT" }
  })

  return daysFormated
}

function getPreviousMonth(monthSelected: TMonth): TMonth {
  const previusMonth =
    monthSelected.month == 0
      ? MONTHS[monthSelected.month]
      : MONTHS[MONTHS.length - 1]

  return previusMonth
}
