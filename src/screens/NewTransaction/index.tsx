import { useContext, useState } from 'react'
import { ToastAndroid } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { TransactionTypeButton } from '../../components/TransactionTypeButton'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Form/Input'
import { TransactionContext } from '../../contexts/transactions-context'

import { Container, Form, Label, TransactionType } from './styles'

const createTransactionSchema = z.object({
  title: z.string(),
  amount: z.coerce.number(),
  type: z.enum(['INCOME', 'OUTCOME']),
})

export type TransactionFormData = z.infer<typeof createTransactionSchema>

export function NewTransaction() {
  const { COLORS } = useTheme()
  const [transactionType, setTransactionType] = useState<'INCOME' | 'OUTCOME'>(
    'INCOME',
  )

  const { createNewTransaction, isLoading } = useContext(TransactionContext)

  const { control, handleSubmit } = useForm<TransactionFormData>({
    resolver: zodResolver(createTransactionSchema),
    defaultValues: {
      type: 'INCOME',
    },
  })

  const { navigate } = useNavigation()

  function handleTransactionTypesSelect(type: 'INCOME' | 'OUTCOME') {
    setTransactionType(type)
  }

  async function handleNewTransaction({ title, amount }: TransactionFormData) {
    try {
      createNewTransaction({ title, amount, type: transactionType })
      ToastAndroid.show('Transação criada com sucesso!', ToastAndroid.SHORT)
      navigate('home')
    } catch (error) {
      ToastAndroid.show(
        'Não foi possível criar uma transação.',
        ToastAndroid.SHORT,
      )
    }
  }

  return (
    <Container>
      <Header title="New transaction" showBackButton />

      <Form>
        <Label>Title</Label>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Mobile app"
              placeholderTextColor={COLORS.GRAY_300}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <Label>Price</Label>
        <Controller
          control={control}
          name="amount"
          render={({ field: { onChange } }) => (
            <Input
              placeholder="$ 4.000,00"
              placeholderTextColor={COLORS.GRAY_300}
              keyboardType="numeric"
              onChangeText={onChange}
            />
          )}
        />
        <TransactionType>
          <TransactionTypeButton
            type="INCOME"
            title="Income"
            onPress={() => handleTransactionTypesSelect('INCOME')}
            isActive={transactionType === 'INCOME'}
          />
          <TransactionTypeButton
            type="OUTCOME"
            title="Outcome"
            onPress={() => handleTransactionTypesSelect('OUTCOME')}
            isActive={transactionType === 'OUTCOME'}
          />
        </TransactionType>
        <Button
          title="Create"
          disabled={isLoading}
          onPress={handleSubmit(handleNewTransaction)}
        />
      </Form>
    </Container>
  )
}
