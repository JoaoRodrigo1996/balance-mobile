import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../components/Button'
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
import { z } from 'zod'
import { api } from '../../lib/axios'
import { useAuth } from '../../hooks/useAuth'

const signUpClientSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})

type SignUpClientSchema = z.infer<typeof signUpClientSchema>

export function SignUp() {
  const { COLORS } = useTheme()
  const { signIn } = useAuth()

  const { navigate } = useNavigation()

  const { control, handleSubmit } = useForm<SignUpClientSchema>({
    resolver: zodResolver(signUpClientSchema),
  })

  async function handleSignUp({ email, name, password }: SignUpClientSchema) {
    try {
      await api.post('/accounts', { email, name, password })
      await signIn({ email, password })
    } catch (error) {
      console.log(error)
    }
  }

  function handleSignIn() {
    navigate('signIn')
  }

  return (
    <Container>
      <Title>Create an account</Title>
      <Form>
        <Label>Name</Label>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="John Doe"
              placeholderTextColor={COLORS.GRAY_300}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
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
          title="Create"
          style={{ width: '100%' }}
          onPress={handleSubmit(handleSignUp)}
        />
        <LinkContainer>
          <SubTitle>Already have an account?</SubTitle>
          <Link onPress={handleSignIn}>
            <LinkText>Log in</LinkText>
          </Link>
        </LinkContainer>
      </Form>
    </Container>
  )
}
