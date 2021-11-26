const dateRange = (
  startDate: string | undefined,
  endDate: string | undefined
): string => {
  if (!startDate || !endDate) return ""
  return `${startDate} - ${endDate}`
}

export default dateRange
