import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CommentEntity } from 'src/entities/comment.entity'
import { CommentInterface } from 'src/interface/comment.interface'
import { Repository } from 'typeorm'

@Injectable()
export class CommentService {
	constructor(
		@InjectRepository(CommentEntity)
		private readonly commentRepository: Repository<CommentEntity>
	) {}

	async select(limit: number, offset: number) {
		return await this.commentRepository.find({
			select: ['content', 'id', 'nickname', 'username'],
			where: { delete: 0 },
			skip: limit,
			take: offset
		})
	}

	async create(comment: CommentInterface) {
		return await this.commentRepository.save(comment)
	}

	async delete(id: number) {
		return await this.commentRepository.update(id, { delete: 1 })
	}
}
