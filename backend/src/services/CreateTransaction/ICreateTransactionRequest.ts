interface ICreateTransactionRequest {
  title: string,
  value: number,
  type: 'income' | 'outcome',
  user_id: number,
  category: string
}

export default ICreateTransactionRequest
