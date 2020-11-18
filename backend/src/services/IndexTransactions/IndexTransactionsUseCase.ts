import ServiceError from '@/exceptions/ServiceError'
import ITransactionsRepository from '@/repositories/ITransactionsRepository'
import IIndexResponse from './IIndexResponse'

class IndexTransactionsUseCase {
  private readonly defaultTake = 10
  private readonly defaultSkip = 0
  private readonly minTake = 1
  private readonly minSkip = 0

  constructor(
    private transactionsRepository: ITransactionsRepository
  ) { }

  public async execute(user_id: number, take = this.defaultTake, skip = this.defaultSkip): Promise<IIndexResponse> {
    take = Math.max((isNaN(take) ? this.defaultTake : take), this.minTake)
    skip = Math.max((isNaN(skip) ? this.defaultSkip : skip), this.minSkip)

    const transactions = await this.transactionsRepository
      .index(user_id, take, skip).catch(() => {
        throw new ServiceError('Invalid value for "take" or "skip"')
      })

    const balance = await this.transactionsRepository
      .getBalance(user_id)

    return { transactions, balance }
  }
}

export default IndexTransactionsUseCase
