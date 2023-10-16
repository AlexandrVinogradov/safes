export const scrollToggle = (isDisableScroll: boolean) => {
	const isWindow = typeof window != 'undefined' && window.document

	if (isWindow && isDisableScroll) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
}
