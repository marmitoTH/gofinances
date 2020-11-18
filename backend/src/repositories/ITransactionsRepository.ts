import IBalance from '../entities/IBalance';
import ITransaction from '../entities/ITransaction';

interface ITransactionsRepository {
  bootstrap(entity: Partial<ITransaction>): Promise<ITransaction>
  index(user_id: number, take: number, skip: number): Promise<ITransaction[]>
  findById(id: number): Promise<ITransaction | undefined>
  getBalance(user_id: number): Promise<IBalance>
  removeById(id: number): Promise<void>
}

export default ITransactionsRepository
