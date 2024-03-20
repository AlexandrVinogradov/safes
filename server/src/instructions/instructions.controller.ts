import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import {
	CreateInstructionCategoryDto,
	CreateInstructionDto,
	UpdateInstructionCategoryDto,
	UpdateInstructionDto,
} from './dto/create-instructions.dto'
import { Instruction } from './instructions.model'
import { InstructionsService } from './instructions.service'
import { InstructionCategories } from './instruction_categories.model'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'
import { FileFieldsInterceptor } from '@nestjs/platform-express'
import { SharpPipe } from 'src/pipes/sharpPipe'
import { INSTRUCTIONS_FILES_PATH } from 'src/utils/constants'
import * as fs from 'fs'
import * as path from 'path'

@ApiTags('Инструкции')
@Controller('instructions')
export class InstructionsController {
	constructor(private instructionService: InstructionsService) {}

	@ApiOperation({ summary: 'Создание категории инструкции' })
	@ApiResponse({ status: 200, type: Instruction })
	@UseGuards(JwtGuard)
	@Post('/category')
	createCategory(@Body() instructionCategoryDto: CreateInstructionCategoryDto) {
		return this.instructionService.createInstructionCategory(instructionCategoryDto)
	}

	@ApiOperation({ summary: 'Обновить категорию' })
	@ApiResponse({ status: 200, type: InstructionCategories })
	@UseGuards(JwtGuard)
	@Patch('/category/:id')
	updateCategory(@Param('id') id: number, @Body() instructionCategory: UpdateInstructionCategoryDto) {
		return this.instructionService.updateInstructionCategory(id, instructionCategory)
	}

	@ApiOperation({ summary: 'Удалить категорию инструкций' })
	@ApiResponse({ status: 200, type: InstructionCategories })
	@UseGuards(JwtGuard)
	@Delete('/category/:id')
	deleteCategory(@Param('id') id: number) {
		return this.instructionService.deleteInstructionCategory(id)
	}

	@ApiOperation({ summary: 'Создание инструкции' })
	@ApiResponse({ status: 200, type: Instruction })
	@UseGuards(JwtGuard)
	@Post()
	@UseInterceptors(
		FileFieldsInterceptor([
			{ name: 'image', maxCount: 1 },
			{ name: 'pdf', maxCount: 1 },
		]),
	)
	async createInstruction(
		@Body() instructionDto: CreateInstructionDto,
		@UploadedFiles() files: { image: Express.Multer.File[]; pdf: Express.Multer.File[] },
	) {
		const imageFile = files.image?.[0]
		const pdfFile = files.pdf?.[0]
		// Save PDF file
		const pdfFileName = path.parse(pdfFile.originalname).name + '-' + Date.now() + '.pdf'
		const pdfPath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${pdfFileName}`
		fs.writeFileSync(pdfPath, pdfFile.buffer)

		const imageNames = (await new SharpPipe(INSTRUCTIONS_FILES_PATH).transform(imageFile)) as string[]

		return this.instructionService.createInstruction(instructionDto, imageNames, pdfFileName)
	}

	@ApiOperation({ summary: 'Обновить инструкцию' })
	@ApiResponse({ status: 200, type: Instruction })
	@UseGuards(JwtGuard)
	@Patch(':id')
	@UseInterceptors(
		FileFieldsInterceptor([
			{ name: 'image', maxCount: 1 },
			{ name: 'pdf', maxCount: 1 },
		]),
	)
	async updateInstruction(
		@Param('id') id: number,
		@Body() instructionDto: UpdateInstructionDto,
		@UploadedFiles() files: { image: Express.Multer.File[]; pdf: Express.Multer.File[] },
	) {
		const imageFile = files.image?.[0]
		const pdfFile = files.pdf?.[0]
		// Save PDF file
		const pdfFileName = path.parse(pdfFile.originalname).name + '-' + Date.now() + '.pdf'
		const pdfPath = `${process.env.FILES_PATH}${INSTRUCTIONS_FILES_PATH}/${pdfFileName}`
		fs.writeFileSync(pdfPath, pdfFile.buffer)

		const imageNames = (await new SharpPipe(INSTRUCTIONS_FILES_PATH).transform(imageFile)) as string[]

		return this.instructionService.updateInstruction(id, instructionDto, imageNames, pdfFileName)
	}

	@ApiOperation({ summary: 'Удалить инструкцию' })
	@ApiResponse({ status: 200, type: Instruction })
	@UseGuards(JwtGuard)
	@Delete(':id')
	deleteInstruction(@Param('id') id: number) {
		return this.instructionService.deleteInstruction(id)
	}

	@ApiOperation({ summary: 'Получить вcе категории' })
	@ApiResponse({ status: 200, type: [Instruction] })
	@Get()
	getCategories() {
		return this.instructionService.getAllCategories()
	}

	@ApiOperation({ summary: 'Получить вcе инструкции по выбранной категории' })
	@ApiResponse({ status: 200, type: [Instruction] })
	@Get(':id')
	getInstructions(@Param('id') alias: string) {
		return this.instructionService.getInstructions(alias)
	}
}
