import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentController } from 'src/controller/comment.controller'
import { CommentEntity } from 'src/entities/comment.entity'
import { CommentService } from 'src/services/comment.service'

@Module({
	imports: [TypeOrmModule.forFeature([CommentEntity])],
	controllers: [CommentController],
	providers: [CommentService]
})
export class CommentModule {}
