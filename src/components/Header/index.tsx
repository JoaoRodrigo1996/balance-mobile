import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, LogOutIcon, Title } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { TouchableOpacity } from 'react-native'

interface HeaderProps {
  showBackButton?: boolean
  title: string
}

export function Header({ title, showBackButton = false }: HeaderProps) {
  const { signOut } = useAuth()
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  async function handleSignOut() {
    await signOut()
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon name="chevron-left" />
        </BackButton>
      )}

      <Title>{title}</Title>

      <TouchableOpacity onPress={handleSignOut}>
        <LogOutIcon />
      </TouchableOpacity>
    </Container>
  )
}
