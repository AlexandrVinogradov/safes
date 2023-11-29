import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { User } from './user.model'
import { CreateUserDto } from './dto/createUserDto'

@Injectable()
export class UserService {
	constructor(@InjectModel(User) private userRepo: typeof User) {}

	async findOneWithUserName(userName: string) {
		return await this.userRepo.findOne({ where: { login: userName } })
	}

	async create(createUserDto: CreateUserDto): Promise<any> {
		const user = await this.userRepo.create(createUserDto)
		await user.save()
		const { password, ...result } = user.toJSON()
		return result
	}
}
