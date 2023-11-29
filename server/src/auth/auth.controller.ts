import { Body, Controller, Get, Post, Request, UseGuards, Headers } from '@nestjs/common'
import { CreateUserDto } from 'src/user/dto/createUserDto'
import { UserService } from 'src/user/user.service'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local-auth.guard'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { User } from 'src/user/user.model'

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService, private userService: UserService) {}

	@ApiOperation({ summary: 'Login' })
	@ApiResponse({ status: 200, type: User })
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		return await this.authService.login(req.user)
	}

	@ApiOperation({ summary: 'Verify Token' })
	@ApiResponse({ status: 200, description: 'Token is valid' })
	@ApiResponse({ status: 401, description: 'Token is invalid or expired' })
	@Get('verify')
	async verify(@Headers('authorization') authorization: string) {
		const token = authorization.replace('Bearer ', '') 
		try {
			const isValid = await this.authService.verifyToken(token)
			if (isValid) {
				return { message: 'Token is valid' }
			} else {
				return { message: 'Token is invalid or expired' }
			}
		} catch (error) {
			return { message: 'Token verification failed' }
		}
	}

	@ApiOperation({ summary: 'Регистрация' })
	@ApiResponse({ status: 200, type: User })
	@Post('register')
	async registerUser(@Body() createUserDto: CreateUserDto) {
		return await this.userService.create(createUserDto)
	}
}
