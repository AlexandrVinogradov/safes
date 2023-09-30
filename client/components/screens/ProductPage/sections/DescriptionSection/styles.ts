export const s = {
	section: /*tw*/ 'pb-[70px]',
	tabButtons: /*tw*/ `relative mb-[30px]
		after:absolute after:w-full after:bg-dark after:opacity-30 after:h-[1px] after:bottom-0 after:left-0`,
	tabContentWrapper: /*tw*/ 'bg-dimBranded2 mb-[20px]',
	tabContent: /*tw*/ `pt-[30px] pb-[10px] text-[14px]
		[&>h2]:text-[18px] [&>h2]:leading-[24px] [&>h2]:pb-5 [&>h2]:font-bold
		[&_td]:text-dimText [&_td]:pb-[20px] [&_td:nth-child(even)]:text-dark
		[&_p]:pb-5
		[&_h3]:pb-5 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:leading-[24px]
		[&_ul]:space-y-1.5 [&_ul]:pl-1.5 [&_ul]:pb-4
		[&_li]:before:content-['—'] [&_li]:before:pr-1.5
	`,
	common: /*tw*/ 'flex items-start',
	attentionIcon: /*tw*/ 'shrink-0 mr-3 mt-1.5',
}