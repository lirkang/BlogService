/*
 * @Author: likan
 * @Date: 2022-03-05 19:52:28
 * @Description: 统一响应数据格式
 * @LastEditTime: 2022-04-09 09:44:07
 */

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
