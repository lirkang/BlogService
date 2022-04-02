import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Post,
  Query
} from '@nestjs/common'

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

    return [{ comment, total }, 200, '获取评论成功']
  }

  @Post('/default')
  @Header('content-type', 'application/json')
  async defaultSave(@Body() comment: CommentDto) {
    return [await this.commentService.defaultSave(comment), 200, '发表评论成功']
  }

  @Post('/anonymous')
  @Header('content-type', 'application/json')
  async anonymousSave(@Body() comment: CommentDto) {
    return [
      await this.commentService.anonymousSave(comment),
      200,
      '发表评论成功'
    ]
  }

  @Delete()
  async remove(@Query('id') id: number) {
    await this.commentService.remove(id)

    return [null, 200, '删除评论成功']
  }
}
