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

  select(limit: number, offset: number, id: number) {
    return this.commentRepository.findAndCount({
      select: [
        'content',
        'id',
        'nickname',
        'create_at',
        'article_id',
        'avatar',
        'anonymous'
      ],
      where: { delete: 0, article_id: id },
      skip: offset * limit,
      take: limit,
      order: { create_at: 'DESC' }
    })
  }

  create(comment: CommentInterface) {
    const finialComment = {
      nickname: comment.nickname,
      avatar: comment.avatar
    }

    if (+comment.anonymous) {
      finialComment.nickname = '匿名用户'
      finialComment.avatar = 'defaultCommentAvatar.jpg'
    }

    return this.commentRepository.save({ ...comment, ...finialComment })
  }
}
