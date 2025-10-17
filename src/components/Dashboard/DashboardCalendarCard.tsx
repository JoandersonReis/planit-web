import { TDayData } from "@/service/types"
import { MONTH_SELECT } from "@/utils/Config"
import { CalendarCheck } from "lucide-react"
import { twMerge } from "tailwind-merge"
import { Calendar } from "../Calendar"
import { Card } from "./Card"

type TDashboardCalendarCard = {
  value: string
  onChange: (value: string) => void
  calendarDaysData?: TDayData[]
  month: number
}

export default function DashboardCalendarCard({
  value,
  onChange,
  month,
  calendarDaysData,
}: TDashboardCalendarCard) {
  return (
    <Card.Root className={twMerge("flex flex-col items-center")}>
      <Card.Content>
        <Card.Header>
          <Card.Title Icon={CalendarCheck}>CALENDÁRIO</Card.Title>

          <Card.Select data={MONTH_SELECT} value={value} onChange={onChange} />
        </Card.Header>

        <Calendar.Default month={month} calendarMonthData={calendarDaysData} />
      </Card.Content>
    </Card.Root>
  )
}
