import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTH_TOKEN_STORAGE } from './storageConfig'

export async function storageSaveAuthToken(accessToken: string) {
  await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, JSON.stringify(accessToken))
}

export async function storageGetAuthToken() {
  const response = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE)

  const accessToken = response ? JSON.parse(response) : {}

  return accessToken
}

export async function storageRemoveAuthToken() {
  await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE)
}
