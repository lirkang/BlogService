import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class ArticleEntity {
	@PrimaryGeneratedColumn()
	id: number

	@CreateDateColumn()
	create_at: number

	@Column({ length: 15 })
	nickname: string

	@Column({ length: 20 })
	title: string

	@Column({ default: 0 })
	comment_count: number

	@Column({ default: 0 })
	visit_count: number

	@Column()
	cover: string

	@Column({ default: 0 })
	delete: number

	@Column({ type: 'text' })
	content: string
}
