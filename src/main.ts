/*
 * @Author likan
 * @Date 2022-03-05 19:52:28
 * @Description
 * @FileName main.ts
 */

import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from 'app.module'
import HttpExceptionFilter from 'config/filter.config'
import TransformInterceptor from 'config/interceptor.config'
import SwaggerConfig from 'config/swagger.config'

async function bootstrap(assetsPrefix = '/public', globalPrefix = '/data') {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.enableCors()

  app.useStaticAssets('./public', { prefix: assetsPrefix })
  app.setGlobalPrefix(globalPrefix)

  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  SwaggerConfig(app)

  await app.listen(600)
}
bootstrap()
