import ICategory from "./ICategory";

interface ITransaction {
  id: number
  title: string
  value: number
  type: 'income' | 'outcome'
  user_id: number
  category: ICategory | string
  category_id: number
  created_at: Date
  updated_at: Date
}

export default ITransaction
