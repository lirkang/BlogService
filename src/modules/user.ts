import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from 'controller/user'
import { UserEntity } from 'entities/user'
import { UserService } from 'services/user'

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity])]
})
export class UserModule {}
