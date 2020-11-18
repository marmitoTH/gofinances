import IBalance from '@/entities/IBalance'
import ITransaction from '@/entities/ITransaction'

interface IIndexResponse {
  transactions: ITransaction[]
  balance: IBalance
}

export default IIndexResponse
