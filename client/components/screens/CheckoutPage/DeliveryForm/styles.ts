export const s = {
	form: /*tw*/ `flex flex-col [&>div>div]:space-y-[30px]`,
	radioGroup: /*tw*/ `pb-[50px]
		maxMd:pb-[28px] maxMd:[&div>div]:space-y-2.5
	`,
	radioItem: /*tw*/ `flex justify-between w-[808px]
		[&>p]:whitespace-nowrap
		maxLg:w-[calc(100vw-110px)] maxMd:text-[13px] 
		maxMd:w-[calc(100vw-60px)] maxMd:[&>p]:ml-5
	`,
	space: /*tw*/ `grow mb-[5px] mx-[5px] border-b-[1px] border-b-dimmerText
		maxMd:hidden
	`,
	submitButtonIcon: /*tw*/ `ml-2 shrink-0`,
}
