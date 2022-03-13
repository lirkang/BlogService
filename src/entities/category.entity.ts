import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity()
export class CategoryEntity {
  @Column()
  type: string

  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn()
  create_at: number
}
