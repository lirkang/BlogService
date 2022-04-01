import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticleController } from 'controller/article'
import { ArticleEntity } from 'entities/article'
import { ArticleService } from 'services/article'

@Module({
  providers: [ArticleService],
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticleController]
})
export class ArticleModule {}
