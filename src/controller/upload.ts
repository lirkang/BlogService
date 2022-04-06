import {
  Controller,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@ApiTags('上传')
@Controller('upload')
export class UploadController {
  @ApiOperation({
    summary: '上传'
  })
  @Post(':category')
  @UseInterceptors(
    FilesInterceptor('files', 20, { limits: { fileSize: 1024 * 1024 * 10 } })
  )
  upload(
    @UploadedFiles() files: Express.Multer.File[],
    @Param('category') category: string
  ) {
    return [
      {
        files:
          files?.map(({ filename, path, size }) => ({
            filename,
            path,
            size
          })) || [],

        category
      },
      200,
      '上传成功'
    ]
  }
}
