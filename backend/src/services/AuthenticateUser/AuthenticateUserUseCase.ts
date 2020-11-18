import ServiceError from '@/exceptions/ServiceError'
import IUserRepository from '@/repositories/IUserRepository'
import IAuthenticateUser from './IAuthenticateUserRequest'
import IAuthenticateUserResponse from './IAuthenticateUserResponse'
import authConfig from '@/config/auth'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

class AuthenticateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) { }

  public async execute({ email, password }: IAuthenticateUser)
    : Promise<IAuthenticateUserResponse> {
    if (!email || !password) {
      throw new ServiceError('Email and password must be provided')
    }

    const user = await this.userRepository.findByEmail(email)

    if (!user) {
      throw new ServiceError('Incorrect email or password')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new ServiceError('Incorrect email or password')
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id.toString(),
      expiresIn: authConfig.jwt.expiresIn
    })

    return { user, token }
  }
}

export default AuthenticateUserUseCase
