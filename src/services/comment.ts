import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentEntity } from 'entities/comment'
import { Repository } from 'typeorm'
import { CommentDto } from 'types/comment'

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) {}

  select(limit = 10, offset = 0, id: number) {
    return this.commentRepository.findAndCount({
      select: [
        'content',
        'id',
        'nickname',
        'create_time',
        'article_id',
        'avatar',
        'anonymous'
      ],
      where: { deleted: 0, article_id: id },
      skip: offset * limit,
      take: limit,
      order: { create_time: 'DESC' }
    })
  }

  anonymous(comment: CommentDto) {
    return this.commentRepository.save(comment)
  }

  default(comment: CommentDto) {
    return this.commentRepository.save(comment)
  }
}
