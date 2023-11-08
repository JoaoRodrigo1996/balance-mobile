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
  return (
    <Container>
      {showBackButton && (
        <BackButton>
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
