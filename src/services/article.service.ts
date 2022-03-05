import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ArticleEntity } from 'src/entities/article.entity'
import { ArticleInterface } from 'src/interface/article.interface'
import { Repository } from 'typeorm'

@Injectable()
export class ArticleService {
	constructor(
		@InjectRepository(ArticleEntity)
		private readonly articleRepository: Repository<ArticleEntity>
	) {}

	select(limit: number, offset: number) {
		return this.articleRepository.find({
			where: { delete: 0 },
			select: [
				'id',
				'comment_count',
				'cover',
				'create_at',
				'title',
				'username',
				'visit_count',
				'nickname'
			],
			skip: offset,
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
				'username',
				'visit_count',
				'nickname'
			]
		})
	}

	create(article: ArticleInterface) {
		return this.articleRepository.insert(article)
	}

	delete(id: number) {
		return this.articleRepository.update(id, { delete: 1 })
	}

	update(id: number, article: ArticleInterface) {
		return this.articleRepository.update(id, article)
	}
}
