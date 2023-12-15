import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateInstructionCategoryDto, CreateInstructionDto, UpdateInstructionCategoryDto } from './dto/create-instructions.dto'
import { Instruction } from './instructions.model'
import { InstructionsService } from './instructions.service'
import { InstructionCategories } from './instruction_categories.model'
import { JwtGuard } from 'src/auth/guards/jwt-auth.guard'

@ApiTags('Инструкции')
@Controller('instructions')
export class InstructionsController {
	constructor(private instructionService: InstructionsService) {}

	@ApiOperation({ summary: 'Создание категории инструкции' })
	@ApiResponse({ status: 200, type: Instruction })
	@UseGuards(JwtGuard)
	@Post()
	create(@Body() instructionDto: CreateInstructionCategoryDto) {
		return this.instructionService.createInstructionCategory(instructionDto)
	}

	@ApiOperation({ summary: 'Обновить категорию' })
	@ApiResponse({ status: 200, type: InstructionCategories })
	@UseGuards(JwtGuard)
	@Patch(':id')
	update(@Param('id') id: number, @Body() instructionCategory: UpdateInstructionCategoryDto) {
		return this.instructionService.updateInstructionCategory(id, instructionCategory)
	}

	@ApiOperation({ summary: 'Удалить категорию инструкций' })
	@ApiResponse({ status: 200, type: InstructionCategories })
	@UseGuards(JwtGuard)
	@Delete(':id')
	delete(@Param('id') id: number) {
		return this.instructionService.deleteInstructionCategory(id)
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
