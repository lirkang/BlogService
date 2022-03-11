import { Module } from '@nestjs/common'
import { MulterModule } from '@nestjs/platform-express'
import { UploadController } from 'src/controller/upload.controller'
import { diskStorage } from 'multer'

@Module({
  controllers: [UploadController],
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './public/',
        filename: (req, file, cb) =>
          cb(null, Date.now() + '.' + file.originalname.split('.')[1])
      })
    })
  ]
})
export class UploadModule {}
