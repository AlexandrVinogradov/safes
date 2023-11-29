import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from './user.model'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/createUserDto'

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
	constructor(private userService: UserService) {}

	@ApiOperation({ summary: 'Создание пользователя' })
	@ApiResponse({ status: 200, type: User })
	@Post()
	create(@Body() userDto: CreateUserDto) {
		return this.userService.create(userDto)
	}
}
