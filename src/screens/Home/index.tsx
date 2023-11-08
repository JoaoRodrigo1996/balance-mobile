import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <Header title="Balance" />

      <Content>
        <Summary />
      </Content>
    </Container>
  )
}
