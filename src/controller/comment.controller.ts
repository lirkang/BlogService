import { Body, Controller, Get, Put, Query } from '@nestjs/common'
import { CommentInterface } from 'src/interface/comment.interface'

import { CommentService } from 'src/services/comment.service'

@Controller('comment')
export class CommentController {
	constructor(private readonly commentService: CommentService) {}

	@Get()
	async select(
		@Query('limit') limit: number,
		@Query('offset') offset: number,
		@Query('id') id: number
	) {
		return await this.commentService.select(limit, offset)
	}

	@Put()
	async create(@Body() comment: CommentInterface) {
		return await this.commentService.create(comment)
	}
}
