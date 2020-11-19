import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'
import { Container, Main } from './styles'
import Balance from '../../components/Balance'
import List from '../../components/List'
import { toast } from 'react-toastify'

interface BalanceData {
  income: number
  outcome: number
  total: number
}

interface TransactionData {
  id: number
  title: string
  value: number
  type: string
  category: CategoryData
  date: Date
}

interface CategoryData {
  title: string
}

function Dashboard() {
  const { token } = useAuth()
  const [balance, setBalance] = useState<BalanceData>()
  const [transactions, setTransactions] = useState<TransactionData[]>()

  const loadTransactions = useCallback(async () => {
    const request = await api.get('/transactions', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

    setBalance(request.data.balance)
    setTransactions(request.data.transactions)
  }, [token])

  const removeTransaction = useCallback(async (id: number) => {
    await api.delete(`/transactions/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    }).then(response => {
      toast.info('Transação deletada!')
    })

    loadTransactions()
  }, [token, loadTransactions])

  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  return (
    <Container>
      <Main>
        <Balance
          income={balance?.income || 0}
          outcome={balance?.outcome || 0}
          total={balance?.total || 0}
        />
        {transactions && <List
          title='Listagem'
          onRemove={removeTransaction}
          transactions={transactions.map(transaction => ({
            id: transaction.id,
            title: transaction.title,
            value: transaction.value,
            type: transaction.type,
            category: transaction.category.title,
            date: transaction.date
          }))}
        />}
      </Main>
    </Container>
  )
}

export default Dashboard
