export const getClearManufacturerName = (input: string) => {
	const regex = /\([^)]+\)/g
	return input?.replace(regex, '').replace('Сейфы', '').trim()
}
