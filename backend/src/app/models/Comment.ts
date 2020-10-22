import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import Post from './Post'

@Entity('comments')
export default class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ nullable: false, length: 140 })
  comment: string

  @ManyToOne(() => Post, post => post.id)
  postId: Post[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @CreateDateColumn({ name: 'updated_at' })
  updatedAt: Date
}
