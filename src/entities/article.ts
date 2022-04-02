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
  create_time: string

  @CreateDateColumn()
  update_time: string

  @Column({ length: 15 })
  username: string

  @Column({ length: 10 })
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
  deleted: number

  @Column({ type: 'text' })
  content: string

  @Column({ length: 50 })
  introduce: string

  @Column()
  category: string
}
