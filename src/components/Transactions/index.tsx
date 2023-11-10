import { Container, Date, Price, Section, Title } from './styles'

type TransactionsProps = {
  title: string
  amount: string
  date: string
  type: 'INCOME' | 'OUTCOME'
}

export function Transactions({ title, amount, type, date }: TransactionsProps) {
  return (
    <Container>
      <Section>
        <Title>{title}</Title>
        <Price type={type}>{amount}</Price>
      </Section>
      <Section>
        <Date>{date}</Date>
      </Section>
    </Container>
  )
}
