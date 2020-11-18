import CategoryRepository from '@/repositories/implementations/dummyDB/CategoriesRepository'
import TransactionsRepository from '@/repositories/implementations/dummyDB/TransactionsRepository'
import CreateTransactionUseCase from './CreateTransactionUseCase'

describe('Create Transaction Use Case', () => {
  const transactionRepository = new TransactionsRepository()
  const categoryRepository = new CategoryRepository()
  const createTransactionUseCase = new CreateTransactionUseCase(
    transactionRepository,
    categoryRepository
  )

  it('Should be able to create new transactions', async () => {
    const transaction = await createTransactionUseCase.execute({
      title: 'Freela',
      type: 'income',
      value: 1200,
      category: 'Jobs'
    })

    expect(transaction.title).toBe('Freela')
    expect(transaction.type).toBe('income')
    expect(transaction.value).toBe(1200)
    expect(typeof (transaction.category)).toBe('object')
    expect((transaction.category as any).title).toBe('Jobs')
  })

  it('Should create tags when inserting new transactions', async () => {
    const category = await categoryRepository.findByTitle('Jobs')
    expect(category != undefined).toBe(true)
    expect(category?.title).toBe('Jobs')
  })

  it('Should not create tabs when they already exists', async () => {
    await createTransactionUseCase.execute({
      title: 'Freela frontend',
      type: 'income',
      value: 1200,
      category: 'Jobs'
    })

    const categories = await categoryRepository.index(2, 0)
    expect(categories.length).toBe(1)
  })

  it('Should not be able to create outcome transactions without a valid balance', async () => {
    await createTransactionUseCase.execute({
      title: 'New Car',
      type: 'outcome',
      value: 45000,
      category: 'Others'
    }).catch(error => {
      expect(error.code).toBe(400)
    })
  })
})
