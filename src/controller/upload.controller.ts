import {
	Body,
	Controller,
	Post,
	UploadedFile,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('upload')
export class UploadController {
	constructor() {}

	@Post('*')
	@UseInterceptors(FileInterceptor('file'))
	upload(
		@UploadedFile() file: Express.Multer.File,
		@Body('path') path: string
	) {
		return { data: { file, path } }
	}
}
