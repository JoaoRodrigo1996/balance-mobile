import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { useState } from 'react'

export function Routes() {
  const { COLORS } = useTheme()
  const [user, setUser] = useState(false)

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.BLUE_900 }}>
      <NavigationContainer>
        {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  )
}
