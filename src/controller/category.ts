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
import { CategoryService } from 'services/category'
import { CategoryDto } from 'types/category'

@ApiTags('文章分类')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({
    summary: '获取分类'
  })
  @Get()
  async select() {
    return [await this.categoryService.select(), 200, '获取分类成功']
  }

  @ApiOperation({
    summary: '新增分类'
  })
  @Post()
  @Header('content-type', 'application/json')
  async create(@Body() category: CategoryDto) {
    return [await this.categoryService.create(category), 200, '添加分类成功']
  }

  @ApiOperation({
    summary: '删除分类'
  })
  @Delete()
  async remove(@Query('id') id: number) {
    await this.categoryService.remove(id)

    return [null, 200, '删除分类成功']
  }
}
