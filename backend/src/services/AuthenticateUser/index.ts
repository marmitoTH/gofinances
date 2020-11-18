import UsersRepository from '@/repositories/implementations/typeorm/UsersRepository'
import AuthenticateUserController from './AuthenticateUserController'
import AuthenticateUserUseCase from './AuthenticateUserUseCase'

const userRepository = new UsersRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  userRepository
)

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }
