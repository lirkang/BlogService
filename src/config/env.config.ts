/*
 * @Author: likan
 * @Date: 2022-04-06 17:50:07
 * @Description: 配置env变量
 * @LastEditTime: 2022-04-09 09:44:57
 */

import { ArticleEntity } from 'entities/article'
import { CategoryEntity } from 'entities/category'
import { CommentEntity } from 'entities/comment'
import { ImageEntity } from 'entities/image'
import { UserEntity } from 'entities/user'
import development from './development.config'
import production from './production.config'

const envConfig = { development, production }

export default () => ({
  DATABASE_CONFIG: {
    synchronize: true,
    ...envConfig[process.argv[2] || 'development'],
    type: 'mysql',
    entities: [
      ArticleEntity,
      CommentEntity,
      CategoryEntity,
      ImageEntity,
      UserEntity
    ]
  }
})
