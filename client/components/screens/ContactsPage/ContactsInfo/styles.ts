export const s = {
	contactsInfo: /*tw*/ `flex items-center h-[124px] mx-auto justify-center mb-[120px]
		maxLg:flex-col maxLg:h-auto maxLg:space-y-[30px] maxLg:text-[13px] maxLg:mb-[50px]
	`,

	firstBlock: /*tw*/ `pr-[72px]
		maxLg+:pr-4
		maxLg:pr-0
	`,
	firstBlockLink: /*tw*/ `flex items-center text-branded text-[18px] font-bold whitespace-nowrap
		maxLg:text-[13px] 
	`,
	mb: /*tw*/ `mb-4
		maxLg:mb-5
	`,
	phone: /*tw*/ `mr-4 `,

	secondBlock: /*tw*/ `relative w-[354px] h-full flex flex-col justify-center items-center
    before:absolute before:h-full before:bg-dimmerText2 before:w-px before:left-0
    after:absolute after:h-full after:bg-dimmerText2 after:w-px after:right-0

		maxLg:text-[16px] maxLg:py-[30px]
		maxLg:before:h-px maxLg:before:w-[124px] maxLg:before:top-0 maxLg:before:left-1/2 maxLg:before:-translate-x-1/2
		maxLg:after:h-px maxLg:after:w-[124px] maxLg:after:bottom-0 maxLg:after:left-1/2 maxLg:after:-translate-x-1/2

	`,
	secondBlockLinks: /*tw*/ `flex space-x-[30px] pb-2.5`,
	secondBlockMessage: /*tw*/ `w-[250px] text-center`,

	thirdBlock: /*tw*/ `relative w-[354px] h-full flex flex-col justify-center items-center
		after:absolute after:h-full after:bg-dimmerText2 after:w-px after:right-0
		maxLg:after:h-px maxLg:after:w-[124px] maxLg:after:bottom-0  maxLg:after:left-1/2 maxLg:after:-translate-x-1/2
		maxLg:pb-[30px]
	`,
	thirdBlockLink: /*tw*/ `flex items-center text-branded font-bold`,
	mail: /*tw*/ `mr-4 whitespace-nowrap
		
	`,

	fourthBlock: /*tw*/ `flex flex-col justify-center items-center pl-[108px] space-y-2.5 whitespace-nowrap
		maxLg+:pl-4
		maxLg:pl-0
	`,
	fourthBlockTime: /*tw*/ `font-bold text-[18px] text-branded`,
}
