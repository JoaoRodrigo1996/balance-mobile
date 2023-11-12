import { useNavigation } from '@react-navigation/native'
import {
  BackButton,
  BackIcon,
  Container,
  LogOutButton,
  LogOutIcon,
  Title,
} from './styles'

interface HeaderProps {
  showBackButton?: boolean
  title: string
}

export function Header({ title, showBackButton = false }: HeaderProps) {
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon name="chevron-left" />
        </BackButton>
      )}

      <Title>{title}</Title>

      <LogOutButton>
        <LogOutIcon />
      </LogOutButton>
    </Container>
  )
}
