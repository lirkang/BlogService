/*
 * @Author likan
 * @Date 2022-03-05 19:52:28
 * @Description
 * @FileName app.module.ts
 */

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import envConfig from 'config/env.config'
import { ArticleModule } from 'modules/article'
import { CategoryModule } from 'modules/category'
import { CommentModule } from 'modules/comment'
import { ImageModule } from 'modules/image'
import { UploadModule } from 'modules/upload'
import { UserModule } from 'modules/user'

@Module({
  imports: [
    CommentModule,
    ArticleModule,
    UploadModule,
    CategoryModule,
    UserModule,
    ImageModule,

    ConfigModule.forRoot({ load: [envConfig], isGlobal: false }),
    TypeOrmModule.forRoot(envConfig().DATABASE_CONFIG)
  ]
})
export class AppModule {}
