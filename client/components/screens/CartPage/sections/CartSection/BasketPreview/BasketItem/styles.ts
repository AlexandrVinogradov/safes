export const s = {
	basketItem: /*tw*/ `flex relative w-full border border-dimmerText rounded-[4px]
		maxMd:flex-col maxMd:p-2.5 //maxMd:items-center
	`,

	imageWrapper: /*tw*/ `max-w-[426px] min-w-[243px] w-full h-[182px] flex justify-center grow
		maxMd:max-w-none maxMd:mb-5
	`,
	image: /*tw*/ `h-full w-auto`,

	nameCell: /*tw*/ `flex flex-col justify-between max-w-[336px] w-full pt-4 px-5 pb-[13px]
	 container:px-2
	 maxMd:p-0
	`,
	name: /*tw*/ `text-[17px] font-[500]
		maxMd:text-[14px] maxMd:pb-5
	`,
	code: /*tw*/ `text-dimText text-[14px]
		maxMd:text-[14px] maxMd:pb-5
	`,

	priceCell: /*tw*/ `max-w-[150px] w-full pt-4 pb-[13px] text-[18px] font-bold
	 container:text-[16px]
	 maxMd:tet-[18px] maxMd:p-0 maxMd:text-[18px] maxMd:pb-5 maxMd:flex maxMd:items-center maxMd:space-x-4
	`,
	price: /*tw*/ ` font-bold pb-1
	 container:text-[16px]
	 maxMd:text-[18px] 
	`,
	oldPrice: /*tw*/ `relative text-[17px] text-dimText w-min whitespace-nowrap font-normal
	after:absolute after:w-full after:bg-dimText after:h-[1px] after:bottom-[45%] after:left-0 
  container:text-[15px]
	maxMd:p-0 maxMd:text-[16px]

	`,

	countCell: /*tw*/ `flex flex-col justify-between w-[130px] min-w-[116px] pt-4 pb-[13px]
		maxMd:flex-row maxMd:justify-between maxMd:w-full maxMd:p-0
	`,
	clickInput: /*tw*/ `
		maxMd:order-1
	`,
	countItem: /*tw*/ `font-semibold whitespace-nowrap`,
	countName: /*tw*/ `hidden
		maxLg:inline
	`,
	deleteButton: /*tw*/ `flex items-center justify-between text-branded max-w-[83px] w-full text-[14px]`,

	overlay: /*tw*/ `absolute flex flex-col justify-center items-center top-0 left-0 w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),linear-gradient(0deg,rgba(71,125,157,0.7),rgba(71,125,157,0.7))]`,
	content: /*tw*/ `flex flex-col justify-center items-center bg-white text-branded font-bold w-min rounded py-[30px] px-[60px]
		maxMd:px-5
	`,
	overlayMessage: /*tw*/ `whitespace-nowrap pb-4`,
	overlayButton: /*tw*/ `flex justify-between px-[30px] w-[211px]
		maxMd:w-[211px]
	`,
}
