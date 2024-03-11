import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import SWRProvider from '@/swr-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dolariz.ar',
  description: 'Visualize en tiempo real el precio del dólar en Argentina'
}

interface Props {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<Props>) {
  return <html lang='en'>
    {/*
      <div className={`${style} animation left-[12%] top-[42%]`}>💲</div>
      <div className={`${style} animation left-[70%] top-[50%]`}>💰</div>
      <div className={`${style} animation left-[17%] top-[6%]`}>🏦</div>
      <div className={`${style} animation left-[20%] top-[60%]`}>💸</div>
      <div className={`${style} animation left-[67%] top-[10%]`}>💲</div>
      <div className={`${style} animation left-[80%] top-[70%]`}>💵</div>
      <div className={`${style} animation left-[60%] top-[80%]`}>💰</div>
      <div className={`${style} animation left-[32%] top-[25%]`}>💵</div>
      <div className={`${style} animation left-[90%] top-[25%]`}>🏦</div>
      <div className={`${style} animation left-[80%] top-[20%]`}>💸</div>
    */}
    <SWRProvider>
      <body className={inter.className}>{children}</body>
    </SWRProvider>
  </html >
}
