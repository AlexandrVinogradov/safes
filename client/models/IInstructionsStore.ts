export type InstructionCategoryType = {
	id: number
	title: string
	alias: string
	createdAt: string
	updateAt: string
	metakey: string
	metadesc: string
}

type InstructionType = {
	id: number
	instructions_category_id: number
	link: string
	name: string
	image: string | null
}

export type InstructionsDataType = {
	instructionCategory: InstructionCategoryType
	instructions: InstructionType[]
}
