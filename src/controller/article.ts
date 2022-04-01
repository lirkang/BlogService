import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ArticleService } from 'services/article'
import { ArticleDto } from 'types/article'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async select(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('keyword') keyword: string
  ) {
    const [data, total] = await this.articleService.select(
      limit,
      offset,
      keyword
    )

    return { data, total }
  }

  @Get('/detail')
  async detail(@Query('id') id: number) {
    return { data: await this.articleService.detail(id) }
  }

  @Get('/category')
  async category(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('keyword') keyword: string,
    @Query('category') category: string
  ) {
    const [data, total] = await this.articleService.category(
      limit,
      offset,
      keyword,
      category
    )

    return { data, total }
  }

  @Post()
  async create(@Body() article: ArticleDto) {
    return { data: await this.articleService.create(article) }
  }
}
