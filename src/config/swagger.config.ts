/*
 * @Author: likan
 * @Date: 2022-04-06 22:30:10
 * @Description: 配置api文档
 * @LastEditTime: 2022-04-09 09:42:46
 */

import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export default function SwaggerConfig(
  app: NestExpressApplication,
  api = 'api'
) {
  const config = new DocumentBuilder()
    .setTitle('API文档')
    .setDescription(
      `
        Get: 获取数据
        Post: 新增数据
        Put: 修改数据
        Delete: 删除数据

        统一响应数据格式: {
          data: 数据
          httpCode: 请求码
          httpMsg: 请求信息
        }

        Post/Put 请求头content-type: application/json
      `
    )
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup(api, app, document)
}
