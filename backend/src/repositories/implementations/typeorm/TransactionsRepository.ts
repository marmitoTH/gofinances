import IBalance from '@/entities/IBalance'
import ITransaction from '@/entities/ITransaction'
import ITransactionsRepository from '../../ITransactionsRepository'
import Transaction from '@/entities/implementations/typeorm/Transaction'
import Category from '@/entities/implementations/typeorm/Category'
import { getRepository } from 'typeorm'

class TransactionsRepository implements ITransactionsRepository {
  public async bootstrap(entity: Partial<ITransaction>): Promise<ITransaction> {
    const repository = getRepository(Transaction)
    const transaction = repository.create({
      title: entity.title,
      value: entity.value,
      type: entity.type,
      user_id: entity.user_id,
      category: entity.category as Category
    })

    return await repository.save(transaction)
  }

  public async index(user_id: number, take: number, skip: number): Promise<ITransaction[]> {
    const repository = getRepository(Transaction)
    return await repository.find({ take, skip, where: { user_id } })
  }

  public async findById(id: number): Promise<ITransaction | undefined> {
    const repository = getRepository(Transaction)
    return await repository.findOne({ where: { id } })
  }

  public async getBalance(user_id: number): Promise<IBalance> {
    const repository = getRepository(Transaction)
    const balance: IBalance = {
      income: 0,
      outcome: 0,
      total: 0
    }

    await repository.find({ where: { user_id } }).then(transactions => {
      transactions.forEach(transaction => {
        const { type, value } = transaction

        switch (type) {
          case 'income':
            balance.income += +value
            break
          case 'outcome':
            balance.outcome += +value
            break
        }
      })

      balance.total = balance.income - balance.outcome
    })

    return balance
  }

  public async removeById(id: number): Promise<void> {
    const repository = getRepository(Transaction)
    const transaction = await repository.findOne({ where: { id } })

    if (transaction) {
      await repository.remove(transaction)
    }
  }
}

export default TransactionsRepository
