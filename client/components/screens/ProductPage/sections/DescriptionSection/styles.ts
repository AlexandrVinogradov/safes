export const s = {
	section: /*tw*/ `pb-[70px]
		maxMd:pb-10
	`,
	tabButtons: /*tw*/ `relative mb-[30px] space-x-[60px] flex overflow-auto
		after:absolute after:w-full after:bg-dark after:opacity-30 after:h-[1px] after:bottom-0 after:left-0
		maxMd:text-[13px] maxMd:space-x-5
		`,
	tabContentWrapper: /*tw*/ `bg-dimBranded2 mb-[20px]
		maxMd:mb-2.5
	`,
	tabContent: /*tw*/ `pt-[30px] pb-[10px] text-[14px]
		maxMd:p-2.5 maxMd:text-[12px]

		[&>table]:!w-full

		[&>h2]:text-[18px] [&>h2]:leading-[24px] [&>h2]:pb-5 [&>h2]:font-bold
		maxMd:[&>h2]:text-[16px] maxMd:[&>h2]:pb-2.5

		first:[&_tr>td]:max-w-[300px]
		maxMd:first:[&_tr>td]:min-w-[190px] 	maxMd:first:[&_tr>td]:text-dimText

		[&_td]:text-dimText [&_td]:pb-[20px] [&_td:nth-child(even)]:text-dark
		maxMd:[&_td]:pb-2.5 //maxMd:[&_td]:min-w-[255px] maxMd:[&_td]:break-all

		[&_p]:pb-5

		[&_h3]:pb-5 [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:leading-[24px]
		maxMd:[&_h3]:text-[16px]

		[&_ul]:space-y-1.5 [&_ul]:pl-1.5 [&_ul]:pb-4

		[&_li]:before:content-['—'] [&_li]:before:pr-1.5

		[&_iframe]:pb-4
	`,
	common: /*tw*/ `flex items-start
		maxMd:text-[12px]
	`,
	attentionIcon: /*tw*/ 'shrink-0 mr-3 mt-1.5',
}