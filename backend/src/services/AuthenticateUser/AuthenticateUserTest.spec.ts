import UsersRepository from "@/repositories/implementations/dummyDB/UsersRepository"
import CreateUserUseCase from '../CreateUser/CreateUserUseCase'
import AuthenticateUserUseCase from './AuthenticateUserUseCase'

describe('Authenticate User Use Case', () => {
  const usersRepository = new UsersRepository()
  const createUserUseCase = new CreateUserUseCase(
    usersRepository
  )
  const authenticateUserUseCase = new AuthenticateUserUseCase(
    usersRepository
  )

  it('Should return a token for valid user email and password combination', async () => {
    await createUserUseCase.Execute({
      name: 'Fulano',
      email: 'fulano@detals.com',
      password: 'fulanozika'
    })

    const session = await authenticateUserUseCase.execute({
      email: 'fulano@detals.com',
      password: 'fulanozika'
    })

    expect(session.token !== undefined).toBe(true)
  })
})
