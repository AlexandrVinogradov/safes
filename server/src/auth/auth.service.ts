import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UserService } from 'src/user/user.service'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { User } from 'src/user/user.model'

@Injectable()
export class AuthService {
	constructor(private readonly userService: UserService, private jwtService: JwtService) {}

	async validateUser(username: string, password: string): Promise<any> {
		const user = await this.userService.findOneWithUserName(username)

		if (user && (await bcrypt.compare(password, user.password))) {
			const { password, ...result } = user
			return result
		}

		throw new UnauthorizedException('Неверный логин или пароль')
	}

	async login(user: User): Promise<any> {
		const payload = {
			username: user.login,
		}

		return {
			...user,
			accessToken: this.jwtService.sign(payload),
		}
	}

	async verifyToken(token: string): Promise<boolean> {
		try {
			const decoded = this.jwtService.verify(token)

			return !!decoded
		} catch (error) {
			return false
		}
	}
}
