import TransactionsRepository from '@/repositories/implementations/typeorm/TransactionsRepository'
import IndexTransactionsController from './IndexTransactionsController'
import IndexTransactionsUseCase from './IndexTransactionsUseCase'

const transactionsRepository = new TransactionsRepository

const indexTransactionsUseCase = new IndexTransactionsUseCase(
  transactionsRepository
)

const indexTransactionsController = new IndexTransactionsController(
  indexTransactionsUseCase
)

export { indexTransactionsUseCase, indexTransactionsController }
