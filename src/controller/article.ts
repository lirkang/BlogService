/*
 * @Author: likan
 * @Date: 2022-03-05 19:52:28
 * @Description:
 * @LastEditTime: 2022-04-10 22:08:57
 */

import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Post,
  Query
} from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ArticleService } from 'services/article'
import { ArticleDto } from 'types/article'

@ApiTags('文章')
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({
    summary: '获取文章列表'
  })
  @Get()
  async select(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('keyword') keyword = ''
  ) {
    const [article, total] = await this.articleService.select(
      limit,
      offset,
      keyword
    )

    return [{ article, total, offset }, 200, '获取文章成功']
  }

  @ApiOperation({
    summary: '获取文章详情'
  })
  @Get('/detail')
  async detail(@Query('id') id = 0) {
    return [await this.articleService.detail(id), 200, '获取文章成功']
  }

  @ApiOperation({
    summary: '获取分类文章'
  })
  @Get('/category')
  async category(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('keyword') keyword = '',
    @Query('category') category = 'javascript'
  ) {
    const [article, total] = await this.articleService.category(
      limit,
      offset,
      keyword,
      category
    )

    return [{ article, total }, 200, '获取文章成功']
  }

  @ApiOperation({
    summary: '发表文章'
  })
  @Post()
  @Header('content-type', 'application/json')
  async create(@Body() article: ArticleDto) {
    return [await this.articleService.create(article), 200, '发表文章成功']
  }

  @ApiOperation({
    summary: '删除文章'
  })
  @Delete()
  async remove(@Query('id') id = 0) {
    await this.articleService.remove(id)

    return [null, 200, '删除文章成功']
  }
}
