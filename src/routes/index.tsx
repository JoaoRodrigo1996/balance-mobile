import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { useAuth } from '../hooks/useAuth'

export function Routes() {
  const { COLORS } = useTheme()

  const { user } = useAuth()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BLUE_900 }}>
      <NavigationContainer>
        {user.email ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  )
}
