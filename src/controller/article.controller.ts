import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query
} from '@nestjs/common'
import { ArticleInterface } from 'src/interface/article.interface'
import { ArticleService } from 'src/services/article.service'

@Controller('article')
export class ArticleController {
	constructor(private readonly articleService: ArticleService) {}

	@Get()
	async select(
		@Query('limit') limit: number,
		@Query('offset') offset: number,
		@Query('search') search: string
	) {
		return await this.articleService.select(limit, offset, search)
	}

	@Get(':id')
	async detail(@Param('id') id: number) {
		return await this.articleService.detail(id)
	}
}
