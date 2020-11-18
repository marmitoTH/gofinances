import ITransaction from '@/entities/ITransaction'
import ServiceError from '@/exceptions/ServiceError'
import ICategoriesRepository from '@/repositories/ICategoriesRepository'
import ITransactionsRepository from '@/repositories/ITransactionsRepository'
import ICreateTransactionRequest from './ICreateTransactionRequest'

class CreateTransactionUseCase {
  constructor(
    private transactionsRepository: ITransactionsRepository,
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ title, value, type, user_id, category }: ICreateTransactionRequest)
    : Promise<ITransaction> {
    if (!title || !value || !type || !category) {
      throw new ServiceError('Title, value, type and category should not be null')
    }

    if (type === 'outcome') {
      const balance = await this.transactionsRepository.getBalance(user_id)

      if (value > balance.total) {
        throw new ServiceError('Cannot create outcome without balance')
      }
    }

    let transactionCategory = await this.categoriesRepository
      .findByTitle(category)

    if (!transactionCategory) {
      transactionCategory = await this.categoriesRepository
        .bootstrap({ title: category })
    }

    const transaction = await this.transactionsRepository.bootstrap({
      title,
      value,
      type,
      user_id,
      category: transactionCategory
    })

    return transaction
  }
}

export default CreateTransactionUseCase
