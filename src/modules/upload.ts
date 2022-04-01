import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { UploadController } from 'controller/upload'
import { diskStorage } from 'multer'

@Module({
  controllers: [UploadController],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: (req, file, callback) =>
          callback(null, `./public/${req.params.category}/`),
        filename: (req, file, callback) =>
          callback(
            null,
            `${req.params.category}_${Date.now()}.${
              file.originalname.split('.')[1]
            }`
          )
      })
    })
  ]
})
export class UploadModule {}
