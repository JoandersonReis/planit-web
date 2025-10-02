import { TMonth } from "./types"

const currentDate = new Date()

const MONTHSNOSELECTED: TMonth[] = [
  {
    month: 0,
    days: 31,
    nome: "Janeiro",
    selected: false,
  },
  {
    month: 1,
    days: currentDate.getFullYear() % 4 == 0 ? 29 : 28,
    nome: "Fevereiro",
    selected: false,
  },
  {
    month: 2,
    days: 31,
    nome: "Março",
    selected: false,
  },
  {
    month: 3,
    days: 30,
    nome: "Abril",
    selected: false,
  },
  {
    month: 4,
    days: 31,
    nome: "Maio",
    selected: false,
  },
  {
    month: 5,
    days: 30,
    nome: "Junho",
    selected: false,
  },
  {
    month: 6,
    days: 31,
    nome: "Julho",
    selected: false,
  },
  {
    month: 7,
    days: 31,
    nome: "Agosto",
    selected: false,
  },
  {
    month: 8,
    days: 30,
    nome: "Setembro",
    selected: false,
  },
  {
    month: 9,
    days: 31,
    nome: "Outubro",
    selected: false,
  },
  {
    month: 10,
    days: 30,
    nome: "Novembro",
    selected: false,
  },
  {
    month: 11,
    days: 31,
    nome: "Dezembro",
    selected: false,
  },
]

export const MONTHS = MONTHSNOSELECTED.map((item, index) => {
  if (item.month == currentDate.getMonth()) {
    return { ...item, selected: true }
  }

  return item
})
