import { Body, Controller, Get, Put } from '@nestjs/common'
import { CategoryInterface } from 'interface/category.interface'
import { CategoryService } from 'services/category.service'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async select() {
    return await this.categoryService.select()
  }

  @Put()
  async create(@Body() category: CategoryInterface) {
    return await this.categoryService.create(category)
  }
}
