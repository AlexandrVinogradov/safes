export const scrollToggle = (isDisableScroll: boolean) => {
	const isWindow = typeof window !== 'undefined' && window.document
	const header = document.getElementById('large-header')
	const isHasScroll = document.documentElement.scrollHeight > document.documentElement.clientHeight

	if (!window) return

	if (isDisableScroll && isHasScroll) {
		document.body.style.overflow = 'hidden'
		document.body.style.marginRight = getScrollbarWidth() + 'px'
		console.log(getScrollbarWidth())

		if (!header) return
		// FIXME: 0 ideas why we need 0.35px for chrome on windows
		// Need check on windows
		header.style.width = `calc(100% - ${getScrollbarWidth() - 0.35}px)`
	} else {
		document.body.style.overflow = 'auto'
		document.body.style.marginRight = '0'

		if (!header) return
		header.style.width = '100%'
	}
}

function getScrollbarWidth() {
	const scrollDiv = document.createElement('div')
	scrollDiv.style.width = '100px'
	scrollDiv.style.height = '100px'
	scrollDiv.style.overflow = 'scroll'
	document.body.appendChild(scrollDiv)
	const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	document.body.removeChild(scrollDiv)
	return scrollbarWidth
}
