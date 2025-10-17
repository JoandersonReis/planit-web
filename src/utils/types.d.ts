export type TMonth = {
  month: number
  days: number
  nome: string
}

export type TDayEnum = "MONTH" | "NOMONT"

export type TMonthFormated = {
  date: Date
  type: TDayEnum
}

export type TSelect = {
  value: string
  text: string
}
