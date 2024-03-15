export const replaceImageExtensions = (inputString: string): string => {
	const replacedString = inputString?.replace(/\.(jpg|jpeg|png|gif)/gi, '.webp')
	return replacedString
}
