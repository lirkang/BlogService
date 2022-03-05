import { Body, Controller, Post, Put } from '@nestjs/common'
import { UserInterface } from 'src/interface/user.interface'
import { UserService } from 'src/services/user.service'

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	async login(
		@Body('username') username: string,
		@Body('password') password: string
	) {
		return await this.userService.login(username, password)
	}

	@Put()
	async register(@Body() user: UserInterface) {
		return await this.userService.register(user)
	}
}
