import { underline } from '@/styles/underline'

export const s = {
	button: /*tw*/ `group flex justify-between items-center w-full py-[13px] px-5 duration-300 text-branded font-semibold text-left
        hover:bg-branded hover:pl-8 hover:text-white hover:after:hidden 
        ${underline}
    `,
	link: /*tw*/ 'hover:!pl-5',
	icon: /*tw*/ 'text-branded group-hover:text-white',

	buttonLvl2: /*tw*/ `group flex justify-between items-center w-full py-[13px] px-5 duration-300 text-dark font-normal text-left
        hover:pl-8 hover:text-branded hover:after:bg-branded 
        ${underline} after:duration-300
    `,
	iconLvl2: /*tw*/ 'text-dark group-hover:text-branded duration-500',

	selectedButton: /*tw*/ 'bg-branded pl-8 text-white after:hidden',
	selectedIcon: /*tw*/ 'text-white',
	selectedButtonLvl2: /*tw*/ 'pl-8 !text-branded after:bg-branded ',
	selectedIconLvl2: /*tw*/ '!text-branded',
}
