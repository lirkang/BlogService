import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor
} from '@nestjs/common'
import { map, Observable } from 'rxjs'

@Injectable()
export default class TransformInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      map(result => ({
        result: result
          ? {
              data: result[0] || null,
              status: result[1] || 200,
              msg: result[2] || '请求成功'
            }
          : null,
        httpCode: 200,
        httpMsg: '请求成功, 已响应相关的数据'
      }))
    )
  }
}
