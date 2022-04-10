/*
 * @Author: likan
 * @Date: 2022-03-05 19:52:28
 * @Description:
 * @LastEditTime: 2022-04-10 22:07:08
 */

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

  select(limit: number, offset: number, id: number) {
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

  anonymousSave(comment: CommentDto) {
    return this.commentRepository.save(comment)
  }

  defaultSave(comment: CommentDto) {
    return this.commentRepository.save(comment)
  }

  remove(id: number) {
    return this.commentRepository.update(id, { deleted: 1 })
  }
}
