import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../../components/Form/Input'
import {
  Container,
  Form,
  Label,
  Link,
  LinkContainer,
  LinkText,
  SubTitle,
  Title,
} from './styles'
import { Button } from '../../components/Button'

const logInClientSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LogInClientSchema = z.infer<typeof logInClientSchema>

export function SignIn() {
  const { COLORS } = useTheme()

  const { navigate } = useNavigation()

  const { control, handleSubmit } = useForm<LogInClientSchema>({
    resolver: zodResolver(logInClientSchema),
  })

  function handleSignIn(data: LogInClientSchema) {
    console.log(data)
  }

  function handleSignUp() {
    navigate('signUp')
  }

  return (
    <Container>
      <Title>Enter your account</Title>
      <Form>
        <Label>E-mail</Label>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="johndoe@example.com"
              placeholderTextColor={COLORS.GRAY_300}
              keyboardType="email-address"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Label>Password</Label>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="********"
              placeholderTextColor={COLORS.GRAY_300}
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Button
          title="Enter"
          style={{ width: '100%' }}
          onPress={handleSubmit(handleSignIn)}
        />
        <LinkContainer>
          <SubTitle>Do not have a account?</SubTitle>
          <Link onPress={handleSignUp}>
            <LinkText>Create account</LinkText>
          </Link>
        </LinkContainer>
      </Form>
    </Container>
  )
}
