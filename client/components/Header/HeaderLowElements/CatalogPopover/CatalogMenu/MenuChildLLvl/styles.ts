import { underline } from '@/styles/underline'

export const s = {
	menu: /*tw*/ 'text-dark bg-white w-[350px] h-[83.98vh] overflow-y-auto shadow-[10px_0px_20px_0px_rgba(0,0,0,0.25)]',
	title: /*tw*/ 'bg-dimButton py-[13px] px-5 text-white font-semibold',
	link: /*tw*/ `flex items-center py-[13px] px-5 font-semibold duration-300
        hover:text-branded hover:after:bg-branded 
        ${underline} after:duration-300`,
	dot: /*tw*/ 'w-[7px] h-[7px] bg-branded rounded-full mr-2.5',
}
