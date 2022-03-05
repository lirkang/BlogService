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
		const status = exception.getStatus()

		response.status(status)
		response.send({ result: null, status, msg: '请求错误, 请刷新重试' })
	}
}
