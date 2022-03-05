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

	@Column({ length: 10 })
	nickname: string

	@Column({ default: 0 })
	delete: number

	@Column({ length: 15 })
	username: string

	@Column({ length: 50 })
	content: string

	@CreateDateColumn()
	create_at: number

	@Column()
	avatar: string
}
