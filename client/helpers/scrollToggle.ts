export const scrollToggle = (isDisableScroll: boolean) => {
	const isWindow = typeof window != 'undefined' && window.document
	const element = document.getElementById('large-header')
	const isHasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight

	if (isWindow && isDisableScroll && isHasScroll) {
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = '4px'

		if (!element) return

		element.style.width = 'calc(100% - 4px)'
	} else {
		document.body.style.overflow = 'auto'
		document.body.style.paddingRight = '0px'

		if (!element) return
		element.style.width = '100%'
	}
}
