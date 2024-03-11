'use client'

import { SWRConfig } from 'swr'
import api from '@/api'

interface Props {
  children: React.ReactNode
}

export const fetcher = async (url: string) => {
  const response = await api.get(url)
  const data = response.data
  return data
}

export default function SWRProvider({ children }: Props) {
  return <SWRConfig value={{
    fetcher,
    refreshInterval: 60000,
    keepPreviousData: true
  }}>
    {children}
  </SWRConfig>
}
