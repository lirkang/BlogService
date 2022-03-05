import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryColumn,
	PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class UserEntity {
	@PrimaryGeneratedColumn()
	id: number

	@PrimaryColumn({ length: 15 })
	username: string

	@Column({ length: 15 })
	password: string

	@Column({ length: 10 })
	nickname: string

	@Column()
	avatar: string

	@CreateDateColumn()
	create_at: number
}
