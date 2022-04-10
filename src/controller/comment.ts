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
import { CommentService } from 'services/comment'
import { CommentDto } from 'types/comment'

@ApiTags('评论')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @ApiOperation({
    summary: '获取文章评论'
  })
  @Get()
  async select(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('id') id = 0
  ) {
    const [comment, total] = await this.commentService.select(limit, offset, id)

    return [{ comment, total }, 200, '获取评论成功']
  }

  @ApiOperation({
    summary: '发表新评论'
  })
  @Post('/default')
  @Header('content-type', 'application/json')
  async defaultSave(@Body() comment: CommentDto) {
    return [await this.commentService.defaultSave(comment), 200, '发表评论成功']
  }

  @ApiOperation({
    summary: '发表匿名评论'
  })
  @Post('/anonymous')
  @Header('content-type', 'application/json')
  async anonymousSave(@Body() comment: CommentDto) {
    return [
      await this.commentService.anonymousSave(comment),
      200,
      '发表评论成功'
    ]
  }

  @ApiOperation({
    summary: '删除评论'
  })
  @Delete()
  async remove(@Query('id') id = 0) {
    await this.commentService.remove(id)

    return [null, 200, '删除评论成功']
  }
}
