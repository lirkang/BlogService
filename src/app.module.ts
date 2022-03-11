import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticleEntity } from './entities/article.entity'
import { CommentEntity } from './entities/comment.entity'
import { ArticleModule } from './modules/article.module'
import { CommentModule } from './modules/comment.module'
import { UploadModule } from './modules/upload.module'

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    UploadModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest',
      entities: [CommentEntity, ArticleEntity],
      synchronize: true
    })
  ]
})
export class AppModule {}
