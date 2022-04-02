import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ArticleEntity } from 'entities/article'
import { CategoryEntity } from 'entities/category'
import { CommentEntity } from 'entities/comment'
import { UserEntity } from 'entities/user'

import { ArticleModule } from 'modules/article'
import { CategoryModule } from 'modules/category'
import { CommentModule } from 'modules/comment'
import { UploadModule } from 'modules/upload'
import { UserModule } from 'modules/user'

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    UploadModule,
    CategoryModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nest',
      entities: [CommentEntity, ArticleEntity, CategoryEntity, UserEntity],
      synchronize: true
    })
  ]
})
export class AppModule {}
