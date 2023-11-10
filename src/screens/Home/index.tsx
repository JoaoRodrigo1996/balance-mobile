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

export function Home() {
  const { COLORS, FONT_SIZE } = useTheme()

  const transactions = [
    {
      id: '1',
      title: 'Mobile App',
      amount: 'R$ 2.500,00',
      type: 'INCOME',
      date: '28/10/2023',
    },
    {
      id: '2',
      title: 'Mobile App',
      amount: 'R$ 2.500,00',
      type: 'OUTCOME',
      date: '28/10/2023',
    },
    {
      id: '3',
      title: 'Mobile App',
      amount: 'R$ 2.500,00',
      type: 'OUTCOME',
      date: '28/10/2023',
    },
    {
      id: '4',
      title: 'Mobile App',
      amount: 'R$ 2.500,00',
      type: 'INCOME',
      date: '28/10/2023',
    },
  ]

  return (
    <Container>
      <Header title="Balance" />

      <Content>
        <SummaryCards>
          <Summary amount="R$ 2.500,00" title="INCOME" type="INCOME" />
          <Summary amount="R$ 2.500,00" title="OUTCOME" type="OUTCOME" />
          <Summary amount="R$ 2.500,00" title="TOTAL" type="TOTAL" />
        </SummaryCards>

        <NewTransaction>
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
              date={item.date}
            />
          )}
          contentContainerStyle={{ paddingBottom: 32, marginTop: 14 }}
        />
      </Content>
    </Container>
  )
}
