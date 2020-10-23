import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'

@Entity('posts')
export default class Post {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false, length: 140 })
  message: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
