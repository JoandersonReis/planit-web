import { Calendar } from "@/components/Calendar"
import { TDayData } from "@/service/types"
import { randomUUID } from "crypto"
import { ComponentProps } from "react"

type Tpage = ComponentProps<"div">

export default function Page({ className, ...props }: Tpage) {
  const calendarDaysData: TDayData[] = [
    {
      date: new Date("10-01-2025"),
      debts: [
        {
          commit: new Date("10-01-2025"),
          id: randomUUID(),
          paid: false,
          title: "Fatura Nubank",
          value: "220000",
        },
        {
          commit: new Date("10-01-2025"),
          id: randomUUID(),
          paid: false,
          title: "Água",
          value: "4425",
        },
      ],
    },
    {
      date: new Date("10-03-2025"),
      debts: [
        {
          commit: new Date("10-03-2025"),
          id: randomUUID(),
          paid: true,
          title: "Empréstimo",
          value: "45000",
        },
        {
          commit: new Date("10-03-2025"),
          id: randomUUID(),
          paid: false,
          title: "Gás",
          value: "12000",
        },
      ],
    },
  ]

  return (
    <div className="h-[100vh] flex-center">
      <Calendar.Default calendarMonthData={calendarDaysData} />
    </div>
  )
}
