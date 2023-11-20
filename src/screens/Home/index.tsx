import { FlatList } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Plus } from 'lucide-react-native'

import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { Transactions } from '../../components/Transactions'

import {
  Container,
  Content,
  NewTransaction,
  SummaryCards,
  Title,
} from './styles'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../lib/axios'
import { useEffect, useState } from 'react'

interface TransactionsType {
  id: string
  title: string
  amount: number
  type: 'INCOME' | 'OUTCOME'
  createdAt: string
}

export function Home() {
  const { COLORS, FONT_SIZE } = useTheme()
  const { navigate } = useNavigation()

  const [transactions, setTransactions] = useState<TransactionsType[]>([])

  function handleNewTransaction() {
    navigate('new')
  }

  async function loadTransactions() {
    const response = await api.get('/transactions')

    setTransactions(response.data.transactions)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <Container>
      <Header title="Balance" />

      <Content>
        <SummaryCards>
          <Summary amount="R$ 2.500,00" title="INCOME" type="INCOME" />
          <Summary amount="R$ 2.500,00" title="OUTCOME" type="OUTCOME" />
          <Summary amount="R$ 2.500,00" title="TOTAL" type="TOTAL" />
        </SummaryCards>

        <NewTransaction onPress={handleNewTransaction}>
          <Plus color={COLORS.GRAY_700} size={FONT_SIZE.MD} />
          <Title>Novo</Title>
        </NewTransaction>

        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Transactions
              title={item.title}
              amount={item.amount}
              type={item.type}
              createdAt={item.createdAt}
            />
          )}
          contentContainerStyle={{ paddingBottom: 32, marginTop: 14 }}
        />
      </Content>
    </Container>
  )
}
