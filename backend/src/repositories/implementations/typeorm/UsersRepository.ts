import IUserRepository from '@/repositories/IUserRepository'
import IUser from '@/entities/IUser'
import { getRepository } from 'typeorm'
import User from '@/entities/implementations/typeorm/User'

class UsersRepository implements IUserRepository {
  public async bootstrap(entity: Partial<IUser>): Promise<IUser> {
    const repository = getRepository(User)
    const user = repository.create({
      name: entity.name,
      email: entity.email,
      password: entity.password
    })

    return await repository.save(user)
  }

  public async findByEmail(email: string): Promise<IUser | undefined> {
    const repository = getRepository(User)
    return await repository.findOne({ where: { email } })
  }
}

export default UsersRepository
