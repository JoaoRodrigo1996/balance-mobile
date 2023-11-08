import { useTheme } from 'styled-components/native'
import { Card, Container, Title, CardHeader, CardIcon, Amount } from './styles'

export function Summary() {
  const colors = useTheme()

  return (
    <Container>
      <Card>
        <CardHeader>
          <Title>INCOME</Title>
          <CardIcon name="arrow-up-circle" color={colors.COLORS.GREEN_500} />
        </CardHeader>
        <Amount>R$ 2.500,00</Amount>
      </Card>

      <Card>
        <CardHeader>
          <Title>OUTCOME</Title>
          <CardIcon name="arrow-down-circle" color={colors.COLORS.RED_500} />
        </CardHeader>
        <Amount>R$ 2.500,00</Amount>
      </Card>

      <Card>
        <CardHeader>
          <Title>TOTAL</Title>
          <CardIcon name="dollar-sign" color={colors.COLORS.GRAY_100} />
        </CardHeader>
        <Amount>R$ 2.500,00</Amount>
      </Card>
    </Container>
  )
}
