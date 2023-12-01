export const s = {
	footer: /*tw*/ `bg-dark text-white pt-[62px] pb-[43px]
		maxMd:py-[30px]
	`,

	mainFooter: /*tw*/ `grid grid-cols-3 gap-y-[42px] gap-x-[100px] auto-rows-max auto-cols-max
		maxMd:flex maxMd:flex-col maxMd:items-center maxMd:gap-y-5
	`,
	logo: /*tw*/ `pb-[30px]
		maxMd:w-[248px] maxMd:pb-5
	`,
	contacts: /*tw*/ `
		maxMd:flex-col maxMd:min-w-min maxMd:items-center maxMd:space-y-5 maxMd:text-[13px] maxMd:leading-[30px]
	`,

	nav: /*tw*/ `col-span-2 
		maxLg:pl-[150px]
		maxMd:hidden
	`,
	navList: /*tw*/ `grid grid-cols-4 gap-x-[50px] gap-y-[30px] pt-[23px]
		maxLg:gap-x-[10px] maxLg:gap-y-[10px] maxLg:grid-cols-2
	`,
	navLink: /*tw*/ `whitespace-nowrap hover:text-branded duration-300`,

	secondaryLink: /*tw*/ `flex justify-between text-dimText whitespace-nowrap
		maxLg:text-[13px] 
		maxMd:order-1
		maxSm:text-[11px]
	`,
	rights: 'mx-auto',
	icons: /*tw*/ `flex justify-between max-w-[110px] w-full justify-self-end
		maxMd:order-0
	`,
	icon: /*tw*/ `text-dimText hover:text-branded duration-300`,
}
