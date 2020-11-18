import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import ITransaction from '../../ITransaction'
import User from './User'
import Category from './Category'

@Entity('transactions')
class Transaction implements ITransaction {
  @PrimaryGeneratedColumn('increment')
  public readonly id: number

  @Column()
  public title: string

  @Column('decimal')
  public readonly value: number

  @Column()
  public readonly type: 'income' | 'outcome'

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  public readonly user: User

  @Column()
  public readonly user_id: number

  @ManyToOne(() => Category, category => category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  public category: Category

  @Column()
  public readonly category_id: number

  @CreateDateColumn()
  public readonly created_at: Date

  @UpdateDateColumn()
  public readonly updated_at: Date
}

export default Transaction
