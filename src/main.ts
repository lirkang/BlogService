import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from 'app.module'
import { HttpExceptionFilter } from 'config/filter'
import { TransformInterceptor } from 'config/interceptor'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true,
    cors: true
  })

  app.useStaticAssets('./public', { prefix: '/public' })
  app.setGlobalPrefix('/data')

  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(600)
}
bootstrap()
