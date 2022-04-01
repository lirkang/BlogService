import { Body, Controller, Get, Post } from '@nestjs/common'
import { CategoryService } from 'services/category'
import { CategoryDto } from 'types/category'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async select() {
    return await this.categoryService.select()
  }

  @Post()
  async create(@Body() category: CategoryDto) {
    return await this.categoryService.create(category)
  }
}
