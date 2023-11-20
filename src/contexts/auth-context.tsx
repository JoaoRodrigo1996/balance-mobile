import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import {
  storageRemoveAuthToken,
  storageSaveAuthToken,
} from '../storage/storageAuthToken'
import { storageRemoveUser } from '../storage/storageUser'
import { UserDTO } from '../dtos/UserDTO'

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signOut: () => void
  getClientProfile: () => void
  user: UserDTO
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO)

  async function getClientProfile() {
    try {
      const response = await api.get('/me')

      setUser(response.data.user.client.props)
    } catch (error) {
      throw error
    }
  }

  async function updateUserAndToken(accessToken: string) {
    api.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    await getClientProfile()
  }

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const { data } = await api.post('/session', { email, password })

      if (data.accessToken) {
        await storageSaveAuthToken(data.accessToken)
        updateUserAndToken(data.accessToken)
      }
    } catch (error) {
      throw error
    }
  }

  async function signOut() {
    try {
      setUser({} as UserDTO)
      await storageRemoveUser()
      await storageRemoveAuthToken()
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    const subscribe = api.registerInterceptTokenManager(signOut)

    return () => {
      subscribe()
    }
  }, [signOut])

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, getClientProfile }}>
      {children}
    </AuthContext.Provider>
  )
}
