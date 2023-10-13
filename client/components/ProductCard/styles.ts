export const s = {
	cardWrapper: /*tw*/ `w-full py-5 px-2.5 shadow-[0px_1px_4px_rgba(99,99,99,0.15)]
		maxMd:pt-2.5 maxMd:pb-[15px] maxMd:px-[5px]
	`,

	nameBlock: /*tw*/ `flex justify-between items-start pb-2.5
		maxMd:pb-[5px]
	`,
	name: /*tw*/ `text-[18px] leading-[22px] max-w-[270px] h-[44px] font-noto mr-2
		maxMd:text-[14px] maxMd:leading-[17px]
		maxSm:text-[13px]
	`,
	comparisonButton: /*tw*/ `w-[19px] 
		maxMd:w-[14px]
	`,
	iconButton: /*tw*/ `mr-2.5 mt-0.5
		maxMd:w-[25px] maxMd:h-[25px]
	`,
	cartIcon: /*tw*/ `
		maxMd:w-[25px] maxMd:h-[25px]
	`,
	code: /*tw*/ `text-branded text-[14px]
		maxMd:text-[11px] 
	`,

	imgWrapper: /*tw*/ `py-2.5 w-full flex justify-center duration-300 hover:opacity-[85%] h-[308px] max-h-[308px]
		container:h-[15vw]
		maxLg+:h-[20vw]
		maxMd:h-[35vw]
	`,
	imgLink: /*tw*/ `w-auto block h-full`,
	image: /*tw*/ `w-auto h-full object-contain`,

	desc: /*tw*/ `pb-[18px]
		maxMd:pb-2
	`,

	priceBlock: /*tw*/ `flex items-center pb-5
		maxMd:pb-2`,
	price: /*tw*/ `text-branded mr-5
		maxMd:text-[12px] maxMd:mr-2
	`,
	priceBeforeDiscount: /*tw*/ `relative text-dimText text-[14px] 
		after:absolute after:w-full after:bg-dimText after:h-px after:bottom-[45%] after:left-0
		maxMd:text-[11px]
	`,

	footer: /*tw*/ `flex items-center justify-between`,
	moreButton: /*tw*/ `
		maxMd:w-[110px]
	`,
}
