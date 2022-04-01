import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CategoryController } from 'controller/category'
import { CategoryEntity } from 'entities/category'
import { CategoryService } from 'services/category'

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService]
})
export class CategoryModule {}
