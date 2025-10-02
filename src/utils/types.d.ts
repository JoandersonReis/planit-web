export type TMonth = {
  month: number
  days: number
  nome: string
  selected: boolean
}

export type TDayEnum = "MONTH" | "NOMONT"

export type TMonthFormated = {
  date: Date
  type: TDayEnum
}
