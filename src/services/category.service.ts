import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryEntity } from 'entities/category.entity'
import { CategoryInterface } from 'interface/category.interface'
import { Repository } from 'typeorm'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) {}

  select() {
    return this.categoryRepository.find()
  }

  create(category: CategoryInterface) {
    return this.categoryRepository.save(category)
  }
}
