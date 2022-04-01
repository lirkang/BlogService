import { Body, Controller, Get, Post, Query } from '@nestjs/common'

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
    const [data, total] = await this.commentService.select(limit, offset, id)

    return { data, total }
  }

  @Post('/default')
  async create(@Body() comment: CommentDto) {
    return { data: await this.commentService.default(comment) }
  }

  @Post('/anonymous')
  async anonymous(@Body() comment: CommentDto) {
    return await this.commentService.anonymous(comment)
  }
}
