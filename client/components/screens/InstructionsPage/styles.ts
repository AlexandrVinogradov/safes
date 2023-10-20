import { underline } from '@/styles/underline'

export const s = {
	title: /*tw*/ `text-[46px] leading-[53px] pb-10
		maxMd:text-[28px] maxMd:leading-[32px] maxMd:pb-[20px]
	`,
	listItem: /*tw*/ `relative  py-1.5
		${underline} after:w-1/3 after:mx-0 maxMd:after:w-full	
	`,
	link: /*tw*/ `flex items-center justify-between hover:text-branded duration-300
		maxMd:flex-col  maxMd:py-0 maxMd:pb-5
	`,
	icon: /*tw*/ `mr-4 shrink-0`,
	iconWithTitle: /*tw*/ `flex items-center py-4 pr-[70px]  w-full
		maxMd:text-[13px] maxMd:leading-[17px] maxMd:pb-0 maxMd:pr-3
	`,
	img: /*tw*/ `w-auto h-[91px] mr-[70px]
		maxMd:h-[60px] maxMd:mr-0 maxMd:mt-5
	`,
}
