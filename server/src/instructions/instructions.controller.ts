import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreateInstructionDto } from './dto/create-instructions.dto'
import { Instruction } from './instructions.model'
import { InstructionsService } from './instructions.service'

@ApiTags('Инструкции')
@Controller('instructions')
export class InstructionsController {
	constructor(private instructionService: InstructionsService) {}

	@ApiOperation({ summary: 'Создание инструкции' })
	@ApiResponse({ status: 200, type: Instruction })
	@Post()
	create(@Body() instructionDto: CreateInstructionDto) {
		return this.instructionService.createInstruction(instructionDto)
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
