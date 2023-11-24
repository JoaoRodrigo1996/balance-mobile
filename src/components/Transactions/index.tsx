import Animated, { FadeIn } from 'react-native-reanimated'

import { dateFormatter } from '../../utils/date-formatter'
import { priceFormatter } from '../../utils/price-formatter'

import { Container, Date, Price, Section, Title } from './styles'

type TransactionsProps = {
  title: string
  amount: number
  type: 'INCOME' | 'OUTCOME'
  createdAt: string
}

export function Transactions({
  title,
  amount,
  type,
  createdAt,
}: TransactionsProps) {
  return (
    <Container>
      <Animated.View entering={FadeIn}>
        <Section>
          <Title>{title}</Title>
          <Price type={type}>{priceFormatter.format(amount)}</Price>
        </Section>
        <Section>
          <Date>{dateFormatter(createdAt)}</Date>
        </Section>
      </Animated.View>
    </Container>
  )
}
