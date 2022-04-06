import { Body, Controller, Header, Post } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { UserService } from 'services/user'
import { UserDto } from 'types/user'

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: '登录'
  })
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

  @ApiOperation({
    summary: '注册'
  })
  @Post('register')
  @Header('content-type', 'application/json')
  async register(@Body() user: UserDto) {
    const findUser = await this.userService.findUser(user.username)

    return findUser
      ? [null, 403, '用户名已存在']
      : [await this.userService.register(user), 200, '注册成功']
  }
}
