import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { CreateInstructionCategoryDto, CreateInstructionDto, UpdateInstructionCategoryDto } from './dto/create-instructions.dto'
import { Instruction } from './instructions.model'
import { InstructionCategories } from './instruction_categories.model'

@Injectable()
export class InstructionsService {
	constructor(
		@InjectModel(InstructionCategories) private instructionCategoriesRepository: typeof InstructionCategories,
		@InjectModel(Instruction) private instructionRepository: typeof Instruction,
	) {}

	async createInstructionCategory(dto: CreateInstructionCategoryDto) {
		const instruction = await this.instructionCategoriesRepository.create(dto)

		return {
			status: 200,
			data: instruction,
			message: `Категория инструкций ${instruction.title} успешно создана`,
		}
	}

	async updateInstructionCategory(id: number, instructionCategoryDto: UpdateInstructionCategoryDto) {
		const instructionCategory = await this.instructionCategoriesRepository.findByPk(id)

		await this.instructionCategoriesRepository.update(instructionCategoryDto, { where: { id } })

		if (!instructionCategory) throw new NotFoundException(`Категория инструкций с id: ${id} не найден в базе данных`)

		return {
			status: 200,
			data: instructionCategory,
			message: `Категория инструкций: ${instructionCategory.title} успешно обновлена`,
		}
	}

	async deleteInstructionCategory(id: number) {
		const deletedInstructionCategory = await this.instructionCategoriesRepository.findByPk(id)

		if (!deletedInstructionCategory) throw new NotFoundException(`Категория инструкций с id: ${id} не найден в базе данных`)

		await this.instructionCategoriesRepository.destroy({ where: { id } })

		return {
			status: 200,
			data: deletedInstructionCategory,
			message: `Категория инструкций ${deletedInstructionCategory.title} успешно удалена`,
		}
	}

	async getAllCategories() {
		const instructionCategories = await this.instructionCategoriesRepository.findAll({ order: [['createdAt', 'DESC']] })

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
