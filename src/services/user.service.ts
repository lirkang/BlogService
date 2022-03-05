import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from 'src/entities/user.entity'
import { UserInterface } from 'src/interface/user.interface'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {}

	async login(username: string, password: string) {
		return await this.userRepository.findOne({ username, password })
	}

	async register(user: UserInterface) {
		if (
			await this.userRepository.findOne({
				username: user.username
			})
		)
			return { msg: '用户名已存在' }
		else {
			await this.userRepository.insert(user)
			return await this.userRepository.findOne({ ...user })
		}
	}
}
