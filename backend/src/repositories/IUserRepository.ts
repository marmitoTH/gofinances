import IUser from '@/entities/IUser'

interface IUserRepository {
  bootstrap(entity: Partial<IUser>): Promise<IUser>
  findByEmail(email: string): Promise<IUser | undefined>
}

export default IUserRepository
