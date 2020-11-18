import csvtojson from 'csvtojson'
import ITransaction from '@/entities/ITransaction'
import ServiceError from '@/exceptions/ServiceError'
import CreateTransactionUseCase from '../CreateTransaction/CreateTransactionUseCase'
import ICreateTransactionRequest from '../CreateTransaction/ICreateTransactionRequest'
import IImportTransactionsFile from './IImportTransactionsFile'

class ImportTransactionsUseCase {
  constructor(
    private createTransactionUseCase: CreateTransactionUseCase
  ) { }

  public async execute(user_id: number, file: IImportTransactionsFile): Promise<ITransaction[]> {
    const transactions = await csvtojson().fromString(file.data)

    transactions.map(transaction => {
      if (!transaction.title || !transaction.value ||
        !transaction.type || !transaction.category) {
        throw new ServiceError('One or more elements are not valid transactions')
      }
    })

    const createdTransactions: ITransaction[] = []

    for (let i = 0; i < transactions.length; i++) {
      const transaction = transactions[i] as ICreateTransactionRequest
      const createdTransaction = await this.createTransactionUseCase.execute({
        title: transaction.title,
        value: transaction.value,
        type: transaction.type,
        user_id,
        category: transaction.category
      })

      createdTransactions.push(createdTransaction)
    }

    return createdTransactions
  }
}

export default ImportTransactionsUseCase
