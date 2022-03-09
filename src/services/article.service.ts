import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ArticleEntity } from 'src/entities/article.entity'
import { ArticleInterface } from 'src/interface/article.interface'
import { Like, Repository } from 'typeorm'

@Injectable()
export class ArticleService {
	constructor(
		@InjectRepository(ArticleEntity)
		private readonly articleRepository: Repository<ArticleEntity>
	) {}

	async select(limit: number, offset: number, search: string) {
		return await this.articleRepository.findAndCount({
			where: { delete: 0, title: Like(`%${search}%`) },
			select: [
				'id',
				'comment_count',
				'cover',
				'create_at',
				'title',
				'visit_count',
				'nickname',
				'content'
			],
			skip: offset * limit,
			take: limit
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
				'content'
			]
		})
	}

	create(article: ArticleInterface) {
		return this.articleRepository.insert(article)
	}
}
