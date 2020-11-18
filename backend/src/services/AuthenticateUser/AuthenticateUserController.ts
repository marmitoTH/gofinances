import { Request, Response } from 'express'
import AuthenticateUserUseCase from './AuthenticateUserUseCase'

class AuthenticateUserController {
  constructor(
    private authenticateUserUseCase: AuthenticateUserUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    try {
      const session = await this.authenticateUserUseCase.execute({
        email,
        password
      })

      return response.json(session)
    } catch (error) {
      return response.status(error.code || 400).json({
        message: error.message || 'Unknown error'
      })
    }
  }
}

export default AuthenticateUserController
