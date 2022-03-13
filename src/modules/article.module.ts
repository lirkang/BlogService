import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticleController } from 'controller/article.controller'
import { ArticleEntity } from 'entities/article.entity'
import { ArticleService } from 'services/article.service'

@Module({
  providers: [ArticleService],
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController]
})
export class ArticleModule {}
