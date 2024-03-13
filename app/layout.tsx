import './globals.css'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dolariz.ar',
  description: 'Visualize en tiempo real el precio del dólar en Argentina'
}

interface Props {
  children: React.ReactNode
  list: React.ReactNode
}

export default async function RootLayout({
  children,
  list
}: Readonly<Props>) {
  return <html lang='en'>
    <body className={inter.className}>
      <main
        key='main'
        className='p-2 sm:p-4 flex flex-col gap-2 md:gap-4'
      >
        {children}
        {list}
      </main>
    </body>
  </html >
}
