export type TDebt = {
  id: string
  commit: Date
  title: string
  paid: boolean
  value: string
}

export type TDayData = {
  date: Date
  debts: TDebt[]
}
