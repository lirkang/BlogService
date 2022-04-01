import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentController } from 'controller/comment'
import { CommentEntity } from 'entities/comment'
import { CommentService } from 'services/comment'

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity])],
  controllers: [CommentController],
  providers: [CommentService]
})
export class CommentModule {}
