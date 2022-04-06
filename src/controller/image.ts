import { Controller, Delete, Get, Query } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('图片')
@Controller('image')
export class ImageController {
  constructor() {}

  @ApiOperation({
    summary: '获取正在写的文章的图片'
  })
  @Get()
  select(@Query('id') id: number) {}

  @ApiOperation({
    summary: '删除正在写的文章的图片'
  })
  @Delete()
  delete(@Query('id') id: number) {}
}
