export function CompareDate(
  date: Date,
  compare: string,
  repeat?: boolean
): boolean {
  const compareDate = new Date(compare)

  if (repeat && date.getDate() === compareDate.getDate()) {
    return true
  }

  if (
    date.getDate() === compareDate.getDate() &&
    date.getMonth() === compareDate.getMonth() &&
    date.getFullYear() === compareDate.getFullYear()
  ) {
    return true
  }

  return false
}
