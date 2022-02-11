import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
const appId = process.env.NEXT_PUBLIC_APP_ID
// Support API
export const AxiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'app-id': appId as string,
  },
})