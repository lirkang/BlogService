import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentEntity } from 'src/entities/comment.entity'
import { CommentInterface } from 'src/interface/comment.interface'
import { Repository } from 'typeorm'

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepository: Repository<CommentEntity>
  ) {}

  async select(limit: number, offset: number) {
    return await this.commentRepository.find({
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

  async create(comment: CommentInterface) {
    return await this.commentRepository.save(comment)
  }
}
