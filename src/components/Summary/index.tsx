import { Container, Title, CardHeader, CardIcon, Amount } from './styles'

interface SummaryProps {
  title: string
  amount: string
  type: 'INCOME' | 'OUTCOME' | 'TOTAL'
}

const ICON = {
  INCOME: 'arrow-up-circle',
  OUTCOME: 'arrow-down-circle',
  TOTAL: 'dollar-sign',
}

export function Summary({ title, amount, type }: SummaryProps) {
  return (
    <Container>
      <CardHeader>
        <Title>{title}</Title>
        <CardIcon name={ICON[type]} type={type} />
      </CardHeader>
      <Amount>{amount}</Amount>
    </Container>
  )
}
