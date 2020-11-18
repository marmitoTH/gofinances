import { Request, Response } from 'express'
import IndexTransactionsUseCase from './IndexTransactionsUseCase'

class IndexTransactionsController {
  constructor(
    private indexTransactionsUseCase: IndexTransactionsUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const take = parseInt(request.params.take)
    const skip = parseInt(request.params.skip)
    const user_id = request.user.id

    try {
      const transactions = await this.indexTransactionsUseCase
        .execute(user_id, take, skip)

      return response.json(transactions)
    } catch (error) {
      return response.status(error.code || 400).json({
        message: error.message || 'Unexpected Error'
      })
    }
  }
}

export default IndexTransactionsController
