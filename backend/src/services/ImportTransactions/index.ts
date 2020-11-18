import CategoryRepository from '@/repositories/implementations/typeorm/CategoriesRepository'
import TransactionsRepository from '@/repositories/implementations/typeorm/TransactionsRepository'
import CreateTransactionUseCase from '../CreateTransaction/CreateTransactionUseCase'
import ImportTransactionsController from './ImportTransactionsController'
import ImportTransactionsUseCase from './ImportTransactionsUseCase'

const transactionsRepository = new TransactionsRepository()
const categoriesRepository = new CategoryRepository()

const createTransactionUseCase = new CreateTransactionUseCase(
  transactionsRepository,
  categoriesRepository
)

const importTransactionUseCase = new ImportTransactionsUseCase(
  createTransactionUseCase
)

const importTransactionsController = new ImportTransactionsController(
  importTransactionUseCase
)

export { importTransactionUseCase, importTransactionsController }
