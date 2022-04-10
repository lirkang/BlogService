/*
 * @Author: likan
 * @Date: 2022-04-06 16:52:40
 * @Description:
 * @LastEditTime: 2022-04-10 22:09:08
 */

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
  select(@Query('id') id = 0) {}

  @ApiOperation({
    summary: '删除正在写的文章的图片'
  })
  @Delete()
  delete(@Query('id') id = 0) {}
}
