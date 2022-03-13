import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentEntity } from 'entities/comment.entity'
import { CommentInterface } from 'interface/comment.interface'
import { Repository } from 'typeorm'

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) {}

  select(limit: number, offset: number) {
    return this.commentRepository.find({
      select: [
        'content',
        'id',
        'nickname',
        'create_at',
        'article_id',
        'avatar',
        'anonymous'
      ],
      where: { delete: 0 },
      skip: offset * limit,
      take: limit
    })
  }

  create(comment: CommentInterface) {
    return this.commentRepository.save(comment)
  }
}
