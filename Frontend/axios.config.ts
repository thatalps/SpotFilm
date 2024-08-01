import axios from 'axios'
import { env } from './env'

export const apiAxios = axios.create({
  baseURL: env.VITE_API_URL,
})

if (env.VITE_API_DELAY) {
  apiAxios.interceptors.request.use(async (value) => {
    await new Promise((resolve) => {
      setTimeout(resolve, Math.round(Math.random() * 2000))
    })

    return value
  })
}
