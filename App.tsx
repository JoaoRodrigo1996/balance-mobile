import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { ThemeProvider } from 'styled-components/native'

import theme from './src/themes'
import { StatusBar } from 'react-native'
import { Routes } from './src/routes'
import { AuthContextProvider } from './src/contexts/auth-context'
import { TransactionProvider } from './src/contexts/transactions-context'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <TransactionProvider>
          {fontsLoaded ? <Routes /> : null}
        </TransactionProvider>
      </AuthContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
