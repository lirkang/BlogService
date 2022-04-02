import { Body, Controller, Header, Headers, Post } from '@nestjs/common'
import { UserService } from 'services/user'
import { UserDto } from 'types/user'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  @Header('content-type', 'application/json')
  async login(
    @Body('username') username: string,
    @Body('password') password: string
  ) {
    const user = await this.userService.login(username, password)

    if (!user) return [null, 403, '登陆失败']
    else return [{ user, token: '' }]
  }

  @Post('register')
  @Header('content-type', 'application/json')
  async register(@Body() user: UserDto) {
    return [await this.userService.register(user)]
  }
}
