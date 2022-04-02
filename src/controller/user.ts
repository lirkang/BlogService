import { Controller } from '@nestjs/common'
import { UserService } from 'services/user'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
}
