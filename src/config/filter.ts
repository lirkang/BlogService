import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse()
    const httpCode = exception.getStatus()

    response.status(httpCode)
    response.send({ result: null, httpCode, httpMsg: '请求错误, 请刷新重试' })
  }
}
