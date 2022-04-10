/*
 * @Author: likan
 * @Date: 2022-03-05 19:52:28
 * @Description: 统一错误请求响应格式
 * @LastEditTime: 2022-04-09 09:44:34
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'

@Catch(HttpException)
export default class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse()
    const httpCode = exception.getStatus()

    response.status(httpCode)
    response.send({ result: null, httpCode, httpMsg: '请求错误, 请刷新重试' })
  }
}
