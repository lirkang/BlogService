import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from 'app.module'
import HttpExceptionFilter from 'config/filter.config'
import TransformInterceptor from 'config/interceptor.config'
import SwaggerConfig from 'config/swagger.config'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.enableCors()

  app.useStaticAssets('./public', { prefix: '/public' })
  app.setGlobalPrefix('/data')

  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  SwaggerConfig(app)

  await app.listen(600)
}
bootstrap()
