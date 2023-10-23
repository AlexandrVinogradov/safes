export const s = {
	section: /*tw*/ `pb-[70px]
		maxMd:pb-5
	`,
	wrapper: /*tw*/ `flex
		maxMd:flex-col
	`,
	description: /*tw*/ `w-full ml-5 grow max-w-[700px]
		maxMd:pt-5 maxMd:m-0
	`,

	code: /*tw*/ `text-xl text-dimText pb-[30px] font-normal
		maxMd:text-[13px] maxMd:pb-5
	`,
	name: /*tw*/ `text-[46px] pb-[30px] leading-[53px]
		maxLg:text-[36px] maxMd:hidden
	`,
	mobileName: /*tw*/ `text-[28px] pb-5 leading-[32px] hidden
		maxMd:block
	`,
	prices: /*tw*/ `flex items-center pb-2.5 whitespace-nowrap
		maxMd:pb-[15px]
	`,
	oldPrice: /*tw*/ `relative text-dimmerText text-[36px] mr-[50px]
		after:absolute after:w-full after:bg-dimmerText after:h-[2px] after:bottom-[45%] after:left-0 
		maxLg:text-[26px] maxLg:mr-[20px]
		maxMd:text-[16px] maxMd:after:h-px
		`,
	price: /*tw*/ `text-[46px] font-bold 
		maxLg:text-[32px] 
		maxMd:text-branded maxMd:font-normal maxMd:text-[18px]
	`,
	cheaper: /*tw*/ `text-[20px] text-branded mb-[54px]
		maxMd:text-[14px] maxMd:mb-[25px]
	`,
	orderButtons: /*tw*/ `flex items-center justify-between w-full space-x-4
		maxMd:flex-col maxMd:justify-normal maxMd:space-x-0 maxMd:space-y-5
	`,
	oderButton: /*tw*/ `max-w-[315px] w-full 
		maxMd:max-w-none maxMd:w-full maxMd:[&>button]:w-full
	`,
}
