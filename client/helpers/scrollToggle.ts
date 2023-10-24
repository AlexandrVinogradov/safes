export const scrollToggle = (isDisableScroll: boolean) => {
	const isWindow = typeof window != 'undefined' && window.document

	if (isWindow && isDisableScroll) {
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = '4px'
	} else {
		document.body.style.overflow = 'auto'
		document.body.style.paddingRight = '0px'
	}
}
