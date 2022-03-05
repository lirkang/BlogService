import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from 'src/controller/user.controller'
import { UserEntity } from 'src/entities/user.entity'
import { UserService } from 'src/services/user.service'

@Module({
	imports: [TypeOrmModule.forFeature([UserEntity])],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule {}
