import {
  BACK_HOST,
  BACK_PORT
} from './constants'

import axios from 'axios'

const api = axios.create({ baseURL: `${BACK_HOST}:${BACK_PORT}/api/dollar/` })

export default api
