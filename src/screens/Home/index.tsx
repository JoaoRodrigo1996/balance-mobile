import { useNavigation } from '@react-navigation/native'
import { useContext, useEffect } from 'react'
import { FlatList } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Plus } from 'lucide-react-native'

import { TransactionContext } from '../../contexts/transactions-context'
import { Transactions } from '../../components/Transactions'
import { useSummary } from '../../hooks/useSummary'
import { EmptyList } from '../../components/EmptyList'
import { Summary } from '../../components/Summary'
import { Loading } from '../../components/Loading'
import { Header } from '../../components/Header'

import {
  Container,
  Content,
  NewTransaction,
  SummaryCards,
  Title,
} from './styles'

export function Home() {
  const { COLORS, FONT_SIZE } = useTheme()
  const { navigate } = useNavigation()

  const { transactions, loadTransactions, isLoading } =
    useContext(TransactionContext)

  const { INCOME, OUTCOME, total } = useSummary()

  function handleNewTransaction() {
    navigate('new')
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <Container>
      <Header title="Balance" />

      <Content>
        <SummaryCards>
          <Summary amount={INCOME} title="INCOME" type="INCOME" />
          <Summary amount={OUTCOME} title="OUTCOME" type="OUTCOME" />
          <Summary amount={total} title="TOTAL" type="TOTAL" />
        </SummaryCards>

        <NewTransaction onPress={handleNewTransaction}>
          <Plus color={COLORS.GRAY_700} size={FONT_SIZE.MD} />
          <Title>Novo</Title>
        </NewTransaction>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.createdAt}
            renderItem={({ item }) => (
              <Transactions
                key={item.id}
                title={item.title}
                amount={item.amount}
                type={item.type}
                createdAt={item.createdAt}
              />
            )}
            contentContainerStyle={{ paddingBottom: 32 }}
            ListEmptyComponent={<EmptyList />}
          />
        )}
      </Content>
    </Container>
  )
}
