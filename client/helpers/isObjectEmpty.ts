export const isObjectEmpty = (objectName: unknown) => {
	return objectName && Object.keys(objectName).length === 0 && objectName.constructor === Object
}
