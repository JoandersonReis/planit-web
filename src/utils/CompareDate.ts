export function CompareDate(date: Date, compare: string): boolean {
  const compareDate = new Date(compare)

  if (
    date.getDate() === compareDate.getDate() &&
    date.getMonth() === compareDate.getMonth() &&
    date.getFullYear() === compareDate.getFullYear()
  ) {
    return true
  }

  return false
}
