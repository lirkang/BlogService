import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ArticleEntity } from 'entities/article.entity'
import { ArticleInterface } from 'interface/article.interface'
import { Like, Repository } from 'typeorm'

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>
  ) {}

  select(limit: number, offset: number, search: string) {
    return this.articleRepository.findAndCount({
      where: { delete: 0, title: Like(`%${search || ''}%`) },
      select: [
        'id',
        'comment_count',
        'cover',
        'create_at',
        'title',
        'visit_count',
        'nickname',
        'content',
        'introduce',
        'category'
      ],
      skip: offset * limit,
      take: limit,
      order: { create_at: 'DESC' }
    })
  }

  detail(id: number) {
    return this.articleRepository.findOne(id, {
      where: { delete: 0 },
      select: [
        'id',
        'comment_count',
        'cover',
        'create_at',
        'title',
        'visit_count',
        'nickname',
        'content',
        'introduce',
        'category'
      ]
    })
  }

  create(article: ArticleInterface) {
    return this.articleRepository.insert(article)
  }
}
