import { Injectable } from '@nestjs/common'

@Injectable()
export class UploadService {
	save(file: Express.Multer.File, path: string) {
		return file.filename
	}
}
