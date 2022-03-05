import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArticleEntity } from './entities/article.entity'
import { CommentEntity } from './entities/comment.entity'
import { UserEntity } from './entities/user.entity'
import { ArticleModule } from './modules/article.module'
import { CommentModule } from './modules/comment.module'
import { UploadModule } from './modules/upload.module'
import { UserModule } from './modules/user.module'

@Module({
	imports: [
		CommentModule,
		UserModule,
		ArticleModule,
		UploadModule,
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'root',
			password: '123456',
			database: 'nest',
			entities: [CommentEntity, UserEntity, ArticleEntity],
			synchronize: true
		})
	]
})
export class AppModule {}
