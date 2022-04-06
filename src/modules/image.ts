import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ImageController } from 'controller/image'

@Module({
  imports: [TypeOrmModule.forFeature([])],
  controllers: [ImageController],
  providers: []
})
export class ImageModule {}
