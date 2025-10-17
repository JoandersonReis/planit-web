import { TMonth, TSelect } from "./types"

const currentDate = new Date()

export const MONTHS: TMonth[] = [
  {
    month: 0,
    days: 31,
    nome: "Janeiro",
  },
  {
    month: 1,
    days: currentDate.getFullYear() % 4 == 0 ? 29 : 28,
    nome: "Fevereiro",
  },
  {
    month: 2,
    days: 31,
    nome: "Março",
  },
  {
    month: 3,
    days: 30,
    nome: "Abril",
  },
  {
    month: 4,
    days: 31,
    nome: "Maio",
  },
  {
    month: 5,
    days: 30,
    nome: "Junho",
  },
  {
    month: 6,
    days: 31,
    nome: "Julho",
  },
  {
    month: 7,
    days: 31,
    nome: "Agosto",
  },
  {
    month: 8,
    days: 30,
    nome: "Setembro",
  },
  {
    month: 9,
    days: 31,
    nome: "Outubro",
  },
  {
    month: 10,
    days: 30,
    nome: "Novembro",
  },
  {
    month: 11,
    days: 31,
    nome: "Dezembro",
  },
]

export const MONTH_SELECT: TSelect[] = MONTHS.map((item) => {
  return {
    text: item.nome.split("").slice(0, 3).join("").toLocaleUpperCase(),
    value: String(item.month + 1),
  }
})

export const CONFIG = {
  COOKIES: {
    SESSION: "session",
  },
}
