import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import {
	CreateInstructionCategoryDto,
	CreateInstructionDto,
	UpdateInstructionCategoryDto,
	UpdateInstructionDto,
} from './dto/create-instructions.dto'
import { Instruction } from './instructions.model'
import * as fs from 'fs'
import { InstructionCategories } from './instruction_categories.model'
import { INSTRUCTIONS_FILES_PATH } from 'src/utils/constants'

@Injectable()
export class InstructionsService {
	constructor(
		@InjectModel(InstructionCategories) private instructionCategoriesRepository: typeof InstructionCategories,
		@InjectModel(Instruction) private instructionRepository: typeof Instruction,
	) {}

	async createInstructionCategory(dto: CreateInstructionCategoryDto) {
		const category = await this.instructionCategoriesRepository.create(dto)

		return {
			status: 200,
			data: category,
			message: `Категория инструкций ${category.title} успешно создана`,
		}
	}

	async createInstruction(dto: CreateInstructionDto, imageNames: string[], pdfFileName: string) {
		const instruction = await this.instructionRepository.create({ ...dto, image: imageNames?.[0] || null, link: pdfFileName || null })

		return {
			status: 200,
			data: instruction,
			message: `Инструкций ${instruction.name} успешно создана`,
		}
	}

	async updateInstruction(id: number, dto: UpdateInstructionDto, imageNames: string[], pdfFileName: string) {
		const instruction = await this.instructionRepository.findByPk(id)

		await this.instructionRepository.update({ ...dto, image: imageNames?.[0] || null, link: pdfFileName || null }, { where: { id } })

		if (!instruction) throw new NotFoundException(`Инструкция с id: ${id} не найдена в базе данных`)

		if (instruction.image) {
			const imagePath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${instruction.image}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}
		if (instruction.link) {
			const pdfPath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${instruction.link}`

			if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath)
		}

		return {
			status: 200,
			data: instruction,
			message: `Инструкция: ${instruction.name} успешно обновлена`,
		}
	}

	async deleteInstruction(id: number) {
		const deletedInstruction = await this.instructionRepository.findByPk(id)

		if (!deletedInstruction) throw new NotFoundException(`Инструкция с id: ${id} не найдена в базе данных`)

		if (deletedInstruction.link) {
			const pdfPath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${deletedInstruction.link}`

			if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath)
		}
		if (deletedInstruction.image) {
			const imagePath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${deletedInstruction.image}`

			if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
		}

		await this.instructionRepository.destroy({ where: { id } })

		return {
			status: 200,
			data: deletedInstruction,
			message: `Инструкция: ${deletedInstruction.name} успешно удалена`,
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
		const existingInstructions = await this.instructionRepository.findAll({
			where: { instructions_category_id: deletedInstructionCategory.id },
		})

		if (existingInstructions.length > 0) {
			// Delete all images and pdf form files
			existingInstructions.forEach((el) => {
				const imagePath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${el.image}`
				const pdfPath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${el.link}`

				if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath)
				if (fs.existsSync(pdfPath)) fs.unlinkSync(pdfPath)
			})
		}
		// Удаляем все инструкции родителя
		await this.instructionRepository.destroy({ where: { instructions_category_id: deletedInstructionCategory.id } })

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
