import { BACK_BASE_URL } from '@/constants'
import axios from 'axios'

export const baseURL = `${BACK_BASE_URL}`

const api = axios.create({ baseURL })

export default api
