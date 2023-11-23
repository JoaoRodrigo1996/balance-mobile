import { Container, Icon, Title } from './styles'

export function EmptyList() {
  return (
    <Container>
      <Icon />
      <Title>Você ainda não tem nenhuma transação cadastrada.</Title>
    </Container>
  )
}
