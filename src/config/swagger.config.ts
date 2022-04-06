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
		`
    )
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup(api, app, document)
}
