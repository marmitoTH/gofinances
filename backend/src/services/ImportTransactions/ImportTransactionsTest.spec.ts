import CategoriesRepository from '@/repositories/implementations/dummyDB/CategoriesRepository'
import TransactionsRepository from '@/repositories/implementations/dummyDB/TransactionsRepository'
import CreateTransactionUseCase from '../CreateTransaction/CreateTransactionUseCase'
import ImportTransactionsUseCase from './ImportTransactionsUseCase'

describe('Import Transactions Use Case', () => {
  const categoriesRepository = new CategoriesRepository()
  const transactionsRepository = new TransactionsRepository()

  const createTransactionsUseCase = new CreateTransactionUseCase(
    transactionsRepository,
    categoriesRepository
  )

  const importTransactionsUseCase = new ImportTransactionsUseCase(
    createTransactionsUseCase
  )

  it('Should be able to import transactions', async () => {
    const transactions = await importTransactionsUseCase.execute(
      0,
      {
        name: 'importcsv',
        type: 'text/csv',
        size: 125,
        data: 'title, type, value, category\r\n' +
          'Loan, income, 1500, Others\r\n' +
          'Website Hosting, outcome, 50, Others\r\n' +
          'Ice cream, outcome, 3, Food\r\n'
      }
    )

    expect(transactions.length).toBe(3)
    expect(transactions[0].title).toBe('Loan')
    expect(transactions[1].title).toBe('Website Hosting')
    expect(transactions[2].title).toBe('Ice cream')
    expect(transactions[0].type).toBe('income')
    expect(transactions[1].type).toBe('outcome')
    expect(transactions[2].type).toBe('outcome')
    expect(typeof (transactions[0].category)).toBe('object')
    expect(typeof (transactions[1].category)).toBe('object')
    expect(typeof (transactions[2].category)).toBe('object')
    expect((transactions[0].category as any).title).toBe('Others')
    expect((transactions[1].category as any).title).toBe('Others')
    expect((transactions[2].category as any).title).toBe('Food')
  })
})
