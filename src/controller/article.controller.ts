import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common'
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
    const [data, total] = await this.articleService.select(
      limit,
      offset,
      search
    )

    return { data, total }
  }

  @Get(':id')
  async detail(@Param('id') id: number) {
    return { data: await this.articleService.detail(id) }
  }

  @Put()
  async create(@Body() article: ArticleInterface) {
    return { data: await this.articleService.create(article) }
  }
}
