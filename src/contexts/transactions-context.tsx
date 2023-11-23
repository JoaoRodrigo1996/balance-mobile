import { ReactNode, createContext, useCallback, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: string
  title: string
  amount: number
  type: 'INCOME' | 'OUTCOME'
  createdAt: string
}

interface CreateTransactionInput {
  title: string
  amount: number
  type: 'INCOME' | 'OUTCOME'
}

interface TransactionContextData {
  transactions: Transaction[]
  isLoading: boolean
  createNewTransaction: (data: CreateTransactionInput) => void
  loadTransactions: () => void
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadTransactions = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get('/transactions')

      setTransactions(response.data.transactions)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createNewTransaction = useCallback(
    async ({ title, amount, type }: CreateTransactionInput) => {
      try {
        setIsLoading(true)
        const response = await api.post('/transactions', {
          title,
          amount,
          type,
        })

        setTransactions((state) => [response.data, ...state])
        loadTransactions()
      } catch (error) {
        throw error
      } finally {
        setIsLoading(false)
      }
    },
    [],
  )

  return (
    <TransactionContext.Provider
      value={{
        isLoading,
        transactions,
        createNewTransaction,
        loadTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
