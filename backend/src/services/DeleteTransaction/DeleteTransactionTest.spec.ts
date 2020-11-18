import TransactionsRepository from '@/repositories/implementations/dummyDB/TransactionsRepository'
import DeleteTransactionUseCase from './DeleteTransactionUseCase'

describe('Delete Transaction Use Case', () => {
  const transactionsRepository = new TransactionsRepository()

  const deleteTransactionUseCase = new DeleteTransactionUseCase(
    transactionsRepository
  )

  it('Should be able to delete a transaction', async () => {
    await transactionsRepository.bootstrap({
      title: 'Freela',
      type: 'income',
      value: 1500,
      category: 'Job'
    })

    await deleteTransactionUseCase.execute(0)
    const transactions = await transactionsRepository.index(1, 0)
    expect(transactions.length).toBe(0)
  })

  it('Should throw error if transaction doesnt exists', async () => {
    try {
      await deleteTransactionUseCase.execute(2)
    } catch (error) {
      expect(error.code).toBe(404)
    }
  })
})
