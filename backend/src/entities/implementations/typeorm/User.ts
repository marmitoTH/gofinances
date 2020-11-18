import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

import IUser from '@/entities/IUser'

@Entity('users')
class User implements IUser {
  @PrimaryGeneratedColumn('increment')
  public readonly id: number

  @Column()
  public name: string

  @Column()
  public readonly email: string

  @Column()
  public password: string

  @CreateDateColumn()
  public readonly created_at: Date

  @UpdateDateColumn()
  public readonly updated_at: Date
}

export default User
