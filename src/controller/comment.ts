import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common'

import { CommentService } from 'services/comment'
import { CommentDto } from 'types/comment'

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async select(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('id') id: number
  ) {
    const [comment, total] = await this.commentService.select(limit, offset, id)

    return [{ comment, total }]
  }

  @Post('/default')
  @Header('content-type', 'application/json')
  async create(@Body() comment: CommentDto) {
    return [await this.commentService.default(comment)]
  }

  @Post('/anonymous')
  @Header('content-type', 'application/json')
  async anonymous(@Body() comment: CommentDto) {
    return [await this.commentService.anonymous(comment)]
  }
}
