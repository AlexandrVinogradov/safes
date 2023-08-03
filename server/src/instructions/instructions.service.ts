import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateInstructionDto } from './dto/create-instructions.dto'
import { Instruction } from './instructions.model'
import { InstructionCategories } from './instruction_categories.model'

@Injectable()
export class InstructionsService {
	constructor(
		@InjectModel(InstructionCategories) private instructionCategoriesRepository: typeof InstructionCategories,
		@InjectModel(Instruction) private instructionRepository: typeof Instruction,
	) {}

	async createInstruction(dto: CreateInstructionDto) {
		const instruction = await this.instructionRepository.create(dto)
		return instruction
	}

	async getAllCategories() {
		const instructionCategories = await this.instructionCategoriesRepository.findAll()

		return instructionCategories
	}

	async getInstructions(alias: string) {
		const getCategory = async () => {
			return (await this.instructionCategoriesRepository.findOne({ where: { alias } })).dataValues
		}
		const instructionCategory = await getCategory()

		const instructions = await this.instructionRepository.findAll({
			where: { instructions_category_id: instructionCategory.id },
			order: [['id', 'ASC']],
		})

		return {
			instructionCategory,
			instructions,
		}
	}
}
