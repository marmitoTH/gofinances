import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'
import { Container, Main } from './styles'
import Balance from '../../components/Balance'
import List from '../../components/List'

interface BalanceData {
  income: number
  outcome: number
  total: number
}

interface TransactionData {
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

  useEffect(() => {
    const fetch = async () => {
      const request = await api.get('/transactions', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      setBalance(request.data.balance)
      setTransactions(request.data.transactions)
    }

    fetch()
  }, [token])

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
          transactions={transactions.map(transaction => ({
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
