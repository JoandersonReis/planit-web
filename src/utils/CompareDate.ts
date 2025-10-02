export function CompareDate(date: Date, compare: Date): boolean {
  if (
    date.getDate() === compare.getDate() &&
    date.getMonth() === compare.getMonth() &&
    date.getFullYear() === compare.getFullYear()
  ) {
    return true
  }

  return false
}
