import { useTheme } from 'styled-components/native'
import { Input } from '../../components/Form/Input'
import { Header } from '../../components/Header'

import { Container, Form, Label, TransactionType } from './styles'
import { TransactionTypeButton } from '../../components/TransactionTypeButton'
import { useState } from 'react'
import { Button } from '../../components/Button'

export function NewTransaction() {
  const { COLORS } = useTheme()
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionTypesSelect(type: 'INCOME' | 'OUTCOME') {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header title="New transaction" showBackButton />

      <Form>
        <Label>Title</Label>
        <Input
          placeholder="Mobile app"
          placeholderTextColor={COLORS.GRAY_300}
        />
        <Label>Price</Label>
        <Input
          placeholder="$ 4.000,00"
          placeholderTextColor={COLORS.GRAY_300}
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
        <Button title="Create" />
      </Form>
    </Container>
  )
}
