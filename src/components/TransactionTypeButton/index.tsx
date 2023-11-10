import { TouchableOpacityProps } from 'react-native'
import { Button, Container, Icon, Title } from './styles'

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string
  type: 'INCOME' | 'OUTCOME'
  isActive: boolean
}

const ICONS = {
  INCOME: 'arrow-up-circle',
  OUTCOME: 'arrow-down-circle',
}

export function TransactionTypeButton({
  title,
  type,
  isActive,
  ...rest
}: TransactionTypeButtonProps) {
  return (
    <Container isActive={isActive} type={type}>
      <Button {...rest}>
        <Icon name={ICONS[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  )
}
