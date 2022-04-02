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

  @Column({ length: 15 })
  username: string

  @Column({ default: 0 })
  deleted: number

  @Column({ length: 200 })
  content: string

  @CreateDateColumn()
  create_time: string

  @CreateDateColumn()
  update_time: string

  @Column()
  avatar: string

  @Column()
  article_id: number

  @Column({ default: 0 })
  anonymous: number
}
