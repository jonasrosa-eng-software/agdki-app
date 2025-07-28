export const IsDateValidate = (v: string): boolean => {
  const date = new Date(v)
  return !isNaN(date.getTime())
}
