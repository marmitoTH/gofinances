import ICategory from '@/entities/ICategory'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity('categories')
class Category implements ICategory {
  @PrimaryGeneratedColumn('increment')
  public readonly id: number

  @Column()
  public title: string

  @CreateDateColumn()
  public readonly created_at: Date

  @UpdateDateColumn()
  public readonly updated_at: Date
}

export default Category
