import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryController } from 'controller/category.controller'
import { CategoryEntity } from 'entities/category.entity'
import { CategoryService } from 'services/category.service'

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService]
})
export class CategoryModule {}
