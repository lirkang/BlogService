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

  select(limit = 10, offset = 0, keyword = '') {
    return this.articleRepository.findAndCount({
      where: {
        deleted: 0,
        title: Like(`%${keyword}%`)
      },
      select: selectKeys,
      skip: offset * limit,
      take: limit,
      order: { create_time: 'DESC' }
    })
  }

  detail(id = 0) {
    return this.articleRepository.findOne(id, {
      where: { deleted: 0 },
      select: [...selectKeys, 'content']
    })
  }

  category(limit = 10, offset = 0, keyword = '', category = '') {
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
