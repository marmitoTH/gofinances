import IBalance from '@/entities/IBalance';
import ITransaction from '@/entities/ITransaction';
import ITransactionsRepository from '@/repositories/ITransactionsRepository'

class TransactionsRepository implements ITransactionsRepository {
  private container: ITransaction[] = []

  public async bootstrap(entity: Partial<ITransaction>): Promise<ITransaction> {
    const newTransaction: ITransaction = {
      id: this.container.length,
      title: entity.title || '',
      value: entity.value || 0,
      type: entity.type || 'income',
      category: entity.category || '',
      user_id: entity.user_id || 0,
      category_id: entity.category_id || 0,
      created_at: new Date(),
      updated_at: new Date()
    }

    this.container.push(newTransaction)
    return newTransaction
  }

  public async index(user_id: number, take: number, skip: number): Promise<ITransaction[]> {
    const transactions: ITransaction[] = []
    let taken = 0

    for (let i = skip; (i < this.container.length) && (taken != take); i++) {
      if (this.container[i] && this.container[i].user_id === user_id) {
        taken++
        transactions.push(this.container[i])
      }
    }

    return transactions
  }

  public async findById(id: number): Promise<ITransaction | undefined> {
    return this.container.find(transaction => transaction.id === id)
  }

  public async getBalance(user_id: number): Promise<IBalance> {
    const balance: IBalance = {
      income: 0,
      outcome: 0,
      total: 0
    }

    this.container.forEach(transaction => {
      if (transaction.user_id === user_id) {
        const { type, value } = transaction

        switch (type) {
          case 'income':
            balance.income += +value
            break
          case 'outcome':
            balance.outcome += +value
            break
        }
      }
    })

    balance.total = balance.income - balance.outcome
    return balance
  }

  public async removeById(id: number): Promise<void> {
    for (let i = 0; i < this.container.length; i++) {
      const transaction = this.container[i];

      if (transaction.id === id) {
        this.container.splice(i, 1)
        return
      }
    }
  }
}

export default TransactionsRepository
