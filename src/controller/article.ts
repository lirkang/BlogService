import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common'
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
    const [article, total] = await this.articleService.select(
      limit,
      offset,
      keyword
    )

    return [{ article, total }]
  }

  @Get('/detail')
  async detail(@Query('id') id: number) {
    return [await this.articleService.detail(id)]
  }

  @Get('/category')
  async category(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('keyword') keyword: string,
    @Query('category') category: string
  ) {
    const [article, total] = await this.articleService.category(
      limit,
      offset,
      keyword,
      category
    )

    return [{ article, total }]
  }

  @Post()
  @Header('content-type', 'application/json')
  async create(@Body() article: ArticleDto) {
    return [await this.articleService.create(article)]
  }
}
