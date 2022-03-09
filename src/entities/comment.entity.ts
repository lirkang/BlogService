import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class CommentEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ length: 15 })
	nickname: string

	@Column({ default: 0 })
	delete: number

	@Column({ length: 200 })
	content: string

	@CreateDateColumn()
	create_at: string

	@Column({ default: 'none' })
	avatar: string

	@Column()
	article_id: number

	@Column({ default: 1 })
	anonymous: number
}
