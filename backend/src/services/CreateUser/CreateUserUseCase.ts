import IUser from '@/entities/IUser'
import ServiceError from '@/exceptions/ServiceError'
import IUserRepository from '@/repositories/IUserRepository'
import ICreateUserRequest from './ICreateUserRequest'
import { hash } from 'bcryptjs'

class CreateUserUseCase {
  constructor(
    private repository: IUserRepository
  ) { }

  public async Execute(data: ICreateUserRequest): Promise<IUser> {
    if (!data.email || !data.name || !data.password) {
      throw new ServiceError('Email, name and password must be provided')
    }

    if (await this.repository.findByEmail(data.email)) {
      throw new ServiceError('Email is already registered')
    }

    const hashedPassword = await hash(data.password, 8)

    return await this.repository.bootstrap({
      name: data.name,
      email: data.email,
      password: hashedPassword
    })
  }
}

export default CreateUserUseCase
