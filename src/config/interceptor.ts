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
      map(result => ({
        result,
        status: 200,
        msg: '请求成功, 已响应相关的数据'
      }))
    )
  }
}
