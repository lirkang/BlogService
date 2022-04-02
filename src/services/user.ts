import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from 'entities/user'
import { Repository } from 'typeorm'
import { UserDto } from 'types/user'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  login(username: string, password: string) {
    return this.userRepository.findOne({ where: { username, password } })
  }

  findUser(username: string) {
    return this.userRepository.findOne({ username })
  }

  register(user: UserDto) {
    return this.userRepository.save(user)
  }
}
