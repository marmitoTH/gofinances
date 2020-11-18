import IUser from '@/entities/IUser'
import IUserRepository from '@/repositories/IUserRepository'

class UsersRepository implements IUserRepository {
  private container: IUser[] = []

  public async bootstrap(entity: Partial<IUser>): Promise<IUser> {
    const user: IUser = {
      id: 0,
      name: entity.name || '',
      email: entity.email || '',
      password: entity.password || '',
      created_at: new Date(),
      updated_at: new Date()
    }

    this.container.push(user)
    return user
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    return this.container.find(user => (user.email === email))
  }
}

export default UsersRepository
