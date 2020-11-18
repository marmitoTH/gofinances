import TransactionsRepository from '@/repositories/implementations/typeorm/TransactionsRepository'
import DeleteTransactionController from './DeleteTransactionController'
import DeleteTransactionUseCase from './DeleteTransactionUseCase'

const transactionsRepository = new TransactionsRepository

const deleteTransactionUseCase = new DeleteTransactionUseCase(
  transactionsRepository
)

const deleteTransactionController = new DeleteTransactionController(
  deleteTransactionUseCase
)

export { deleteTransactionUseCase, deleteTransactionController }
