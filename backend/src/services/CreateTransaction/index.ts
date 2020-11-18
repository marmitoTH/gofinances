import TransactionsRepository from '@/repositories/implementations/typeorm/TransactionsRepository'
import CategoriesRepository from '@/repositories/implementations/typeorm/CategoriesRepository'
import CreateTransactionController from './CreateTransactionController'
import CreateTransactionUseCase from './CreateTransactionUseCase'

const typeormTransactionsRepository = new TransactionsRepository()
const categoriesRepository = new CategoriesRepository()

const crateTransactionUseCase = new CreateTransactionUseCase(
  typeormTransactionsRepository,
  categoriesRepository
)

const createTransactionController = new CreateTransactionController(
  crateTransactionUseCase
)

export { crateTransactionUseCase, createTransactionController }
