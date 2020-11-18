import { Request, Response } from 'express'
import DeleteTransactionUseCase from './DeleteTransactionUseCase'

class DeleteTransactionController {
  constructor(
    private deleteTransactionUseCase: DeleteTransactionUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const id = parseInt(request.params.id)

    try {
      await this.deleteTransactionUseCase.execute(id)
      return response.status(204).json()
    } catch (error) {
      return response.status(error.code || 400).json({
        message: error.message || 'Unexpected Error'
      })
    }
  }
}

export default DeleteTransactionController
