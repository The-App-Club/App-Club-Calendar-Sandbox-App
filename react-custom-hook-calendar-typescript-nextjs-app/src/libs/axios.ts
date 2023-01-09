import Axios from 'axios'

import { env } from '@/config/env'

import type { BackendResponse } from '@/types/response'

export const axios = Axios.create({
  baseURL: env.NEXT_PUBLIC_BACKEND_ENDPOINT_BASE_URL,
  timeout: env.NEXT_PUBLIC_AXIOS_FETCH_TIMEOUT,
})

const clampError = (error: any): BackendResponse => {
  const { data } = error.response?.data || { data: { message: error.message } }
  return data
}

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const niceError = {
      ...error,
      response: {
        ...error.response,
        data: clampError(error),
      },
    }
    return Promise.reject(niceError)
  }
)
