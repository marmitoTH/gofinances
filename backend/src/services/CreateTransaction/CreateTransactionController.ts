import { Request, Response } from 'express'
import CreateTransactionUseCase from './CreateTransactionUseCase'

class CreateTransactionController {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { title, value, type, category } = request.body
    const user_id = request.user.id

    try {
      const transaction = await this.createTransactionUseCase.execute({
        title,
        value,
        type,
        user_id,
        category
      })

      return response.status(201).json(transaction)
    } catch (error) {
      return response.status(error.code || 400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export default CreateTransactionController
