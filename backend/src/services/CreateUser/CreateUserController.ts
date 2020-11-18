import { Request, Response } from 'express'
import CreateUserUseCase from './CreateUserUseCase'

class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      const user = await this.createUserUseCase.Execute({
        name,
        email,
        password,
      })

      return response.status(201).json(user)
    } catch (error) {
      return response.status(error.code || 400).json({
        message: error.message || 'Unknown Error'
      })
    }
  }
}

export default CreateUserController
