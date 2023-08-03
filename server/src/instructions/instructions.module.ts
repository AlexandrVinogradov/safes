import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { InstructionsController } from './instructions.controller'
import { Instruction } from './instructions.model'
import { InstructionsService } from './instructions.service'
import { InstructionCategories } from './instruction_categories.model'

@Module({
	controllers: [InstructionsController],
	providers: [InstructionsService],
	imports: [
		SequelizeModule.forFeature([InstructionCategories]),
		SequelizeModule.forFeature([Instruction])
	],
})
export class InstructionsModule {}
