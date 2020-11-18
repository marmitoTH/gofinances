import { Request, Response } from 'express'
import ImportTransactionsUseCase from './ImportTransactionsUseCase'

class ImportTransactionsController {
  constructor(
    private importTransactionsUseCase: ImportTransactionsUseCase
  ) { }

  public async handle(request: Request, response: Response): Promise<Response> {
    const file = request.files?.csv
    const user_id = request.user.id

    try {
      if (!file) {
        throw new Error('No file sent')
      }

      const createdTransactions = await
        this.importTransactionsUseCase.execute(
          user_id,
          {
            name: file.name,
            type: file.mimetype,
            size: file.size,
            data: Buffer.from(file.data).toString()
          }
        )

      return response.json(createdTransactions)
    } catch (error) {
      return response.status(error.code || 400).json({
        error: error.message || 'Unexpected Error'
      })
    }
  }
}

export default ImportTransactionsController
