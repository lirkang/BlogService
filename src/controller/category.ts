import { Body, Controller, Get, Header, Post } from '@nestjs/common'
import { CategoryService } from 'services/category'
import { CategoryDto } from 'types/category'

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async select() {
    return [await this.categoryService.select()]
  }

  @Post()
  @Header('content-type', 'application/json')
  async create(@Body() category: CategoryDto) {
    return [await this.categoryService.create(category)]
  }
}
