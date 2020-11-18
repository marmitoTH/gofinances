import UsersRepository from '@/repositories/implementations/dummyDB/UsersRepository'
import CreateUserUseCase from './CreateUserUseCase'
import { compare } from 'bcryptjs'

describe('Create User Use Case', () => {
  const usersRepository = new UsersRepository()
  const createUserUseCase = new CreateUserUseCase(
    usersRepository
  )

  it('Should be able to create a new user', async () => {
    const user = await createUserUseCase.Execute({
      name: 'Fulano de Tal',
      email: 'fulano@detals.com',
      password: 'fulanozika'
    })

    expect(typeof (user)).toBe('object')
    expect(user.name).toBe('Fulano de Tal')
    expect(user.email).toBe('fulano@detals.com')
    expect((user.password !== '') && (user.password !== undefined)).toBe(true)
  })

  it('Passwords must be encrypted', async () => {
    const user = await createUserUseCase.Execute({
      name: 'Ciclano de Tal',
      email: 'ciclano@detals.com',
      password: 'ciclanozika'
    })

    expect('ciclanozika' === user.password).toBe(false)
    expect(await compare('ciclanozika', user.password)).toBe(true)
  })
})
