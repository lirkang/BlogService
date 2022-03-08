import {
	Body,
	Controller,
	Post,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { UploadService } from 'src/services/upload.service'

@Controller('upload')
export class UploadController {
	constructor(public readonly uploadService: UploadService) {}

	@Post('*')
	@UseInterceptors(FileInterceptor('file'))
	upload(
		@UploadedFile() file: Express.Multer.File,
		@Body('path') path: string
	) {
		return this.uploadService.save(file, path)
	}
}
