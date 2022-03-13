import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentController } from 'controller/comment.controller'
import { CommentEntity } from 'entities/comment.entity'
import { CommentService } from 'services/comment.service'

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
