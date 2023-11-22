export const s = {
	container: /*tw*/ `z-20 shadow-[0px_4px_14px_rgba(0,0,0,0.25)]`,
	wrapper: /*tw*/ `relative`,
	contentWrapper: /*tw*/ `relative border-[5px] rounded-[10px] text-white w-[935px] max-h-[90vh] overflow-auto
		maxLg+:w-[735px]
		maxMd:w-[calc(100vw-10px)] maxMd:h-[calc(100vh-100px)] maxMd:border-none
	`,
	closeButton: /*tw*/ `absolute -top-[50px] -right-[70px] z-20
		maxLg+:-right-[5px] maxLg+:-top-[65px]
		maxMd:top-5 maxMd:right-5 maxMd:w-[30px]
	`,
	closeButtonIcon: /*tw*/ `
		maxMd:w-[30px]
	`,
	bgImg: /*tw*/ `absolute right-0
		maxMd:top-[70px]
	`,
}
