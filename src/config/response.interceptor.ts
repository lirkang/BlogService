import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor
} from '@nestjs/common'
import { map, Observable } from 'rxjs'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler<any>
	): Observable<any> | Promise<Observable<any>> {
		return next.handle().pipe(
			map((result = {}) => {
				let finalResult = result || null
				let msg = result
					? '请求成功, 已响应对应的数据'
					: '请求成功, 没有相应的数据'

				if (result.msg) {
					msg = result.msg
					finalResult = null
				}

				return {
					result: finalResult,
					status: 200,
					msg
				}
			})
		)
	}
}
