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

// TODO 修改项目结构
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
