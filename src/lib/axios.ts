import axios from 'axios'

export const api = axios.create({
  baseURL: '192.168.1.5:3333',
})
