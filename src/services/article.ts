/*
 * @Author: likan
 * @Date: 2022-03-05 19:52:28
 * @Description:
 * @LastEditTime: 2022-04-10 22:06:23
 */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ArticleEntity } from 'entities/article'
import { Like, Repository } from 'typeorm'
import { ArticleDto } from 'types/article'

const selectKeys: (keyof ArticleDto)[] = [
  'id',
  'comment_count',
  'cover',
  'create_time',
  'title',
  'visit_count',
  'nickname',
  'introduce',
  'category',
  'update_time',
  'username'
]

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}

  select(limit: number, offset: number, keyword: string) {
    return this.articleRepository.findAndCount({
      where: {
        deleted: 0,
        title: Like(`%${keyword}%`)
      },
      select: [...selectKeys, 'content'],
      skip: offset * limit,
      take: limit,
      order: { create_time: 'DESC' }
    })
  }

  detail(id: number) {
    return this.articleRepository.findOne(id, {
      where: { deleted: 0 },
      select: [...selectKeys, 'content']
    })
  }

  category(limit: number, offset: number, keyword: string, category: string) {
    return this.articleRepository.findAndCount({
      where: {
        deleted: 0,
        title: Like(`%${keyword}%`),
        category
      },
      select: selectKeys,
      skip: offset * limit,
      take: limit,
      order: { create_time: 'DESC' }
    })
  }

  create(article: ArticleDto) {
    return this.articleRepository.insert(article)
  }

  remove(id: number) {
    return this.articleRepository.update(id, { deleted: 1 })
  }
}
