/*
 * @Author: likan
 * @Date: 2022-03-13 14:05:19
 * @Description:
 * @LastEditTime: 2022-04-10 22:06:55
 */

import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CategoryEntity } from 'entities/category'
import { Repository } from 'typeorm'
import { CategoryDto } from 'types/category'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>
  ) {}

  select() {
    return this.categoryRepository.find()
  }

  create(category: CategoryDto) {
    return this.categoryRepository.save(category)
  }

  remove(id: number) {
    return this.categoryRepository.update(id, { deleted: 1 })
  }
}
