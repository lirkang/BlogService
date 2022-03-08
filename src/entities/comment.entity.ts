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

	@Column({ length: 100 })
	content: string

	@CreateDateColumn()
	create_at: string

	@Column()
	avatar: string
}
