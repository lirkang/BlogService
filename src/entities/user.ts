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

  @Column({ length: 10 })
  nickname: string

  @Column()
  password: string

  @CreateDateColumn()
  create_time: string

  @Column()
  avatar: string
}
