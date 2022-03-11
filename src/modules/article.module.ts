import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticleController } from 'src/controller/article.controller'
import { ArticleEntity } from 'src/entities/article.entity'
import { ArticleService } from 'src/services/article.service'

@Module({
  providers: [ArticleService],
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController]
})
export class ArticleModule {}
