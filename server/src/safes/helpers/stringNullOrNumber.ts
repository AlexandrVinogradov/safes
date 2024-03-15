export const stringNullOrNumber = (value: 'null' | string | number) => {
  if (value === 'null') return null
  return Number(value)
}