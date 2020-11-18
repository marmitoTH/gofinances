import TransactionsRepository from '@/repositories/implementations/dummyDB/TransactionsRepository'
import IndexTransactionsUseCase from './IndexTransactionsUseCase'

describe('Index Transactions Use Case', () => {
  const transactionsRepository = new TransactionsRepository()
  const indexTransactionsUseCase = new IndexTransactionsUseCase(
    transactionsRepository
  )

  it('Should be able to list transactions', async () => {
    await transactionsRepository.bootstrap({
      title: 'Freela Frontend',
      type: 'income',
      value: 1200,
      category: 'Job'
    })

    await transactionsRepository.bootstrap({
      title: 'Freela Backend',
      type: 'income',
      value: 1200,
      category: 'Job'
    })

    await transactionsRepository.bootstrap({
      title: 'Freela Fullstack',
      type: 'income',
      value: 3000,
      category: 'Job'
    })

    await transactionsRepository.bootstrap({
      title: 'Sushi',
      type: 'outcome',
      value: 120,
      category: 'Food'
    })

    await transactionsRepository.bootstrap({
      title: 'Uber',
      type: 'outcome',
      value: 10,
      category: 'Transportation'
    })

    const response = await indexTransactionsUseCase.execute(0)

    expect(response.transactions.length).toBe(5)
    expect(response.balance.income).toBe(5400)
    expect(response.balance.outcome).toBe(130)
    expect(response.balance.total).toBe(5270)
  })

  it('Should be able to list transactions partially', async () => {
    const response = await indexTransactionsUseCase.execute(0, 2, 1)

    expect(response.transactions.length).toBe(2)
    expect(response.transactions[0].title).toBe('Freela Backend')
    expect(response.transactions[1].title).toBe('Freela Fullstack')
  })
})
