import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common'
import { CommentInterface } from 'interface/comment.interface'

import { CommentService } from 'services/comment.service'

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get(':id')
  async select(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Param('id') id: number
  ) {
    const [data, total] = await this.commentService.select(limit, offset, id)

    return { data, total }
  }

  @Put()
  async create(@Body() comment: CommentInterface) {
    return { data: await this.commentService.create(comment) }
  }
}
