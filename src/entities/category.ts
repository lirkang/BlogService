import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class CategoryEntity {
  @Column()
  content: string

  @Column({ length: 15 })
  username: string

  @Column({ length: 10 })
  nickname: string

  @Column({ default: 0 })
  deleted: number

  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  create_time: string

  @CreateDateColumn()
  update_time: string
}
