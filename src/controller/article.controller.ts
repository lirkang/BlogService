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
	async select(@Query('limit') limit: number, @Query('offset') offset: number) {
		return await this.articleService.select(limit, offset)
	}

	@Get(':id')
	async detail(@Param('id') id: number) {
		return await this.articleService.detail(id)
	}

	@Post()
	async update(
		@Body('article') article: ArticleInterface,
		@Body('id') id: number
	) {
		return await this.articleService.update(id, article)
	}

	@Put()
	async create(@Body() article: ArticleInterface) {
		return await this.articleService.create(article)
	}

	@Delete(':id')
	async delete(@Param('id') id: number) {
		return await this.articleService.delete(id)
	}
}
