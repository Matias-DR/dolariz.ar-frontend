import { CachedDollar } from '@/components'
import { FRONT_BASE_URL } from '@/constants'
import Link from 'next/link'

const emojis = ['💲', '💰', '🏦', '💸', '💵']
const link = <Link
  key='home-link'
  href={FRONT_BASE_URL}
  className='text-emerald-500 hover:text-emerald-700'
>
  DOLARINFO
</Link>

export default async function Page() {
  const emoji = emojis[Math.floor(Math.random() * emojis.length)]

  return <>
    <h1
      key='home-title'
      className='text-center text-xl sm:text-2xl md:text-4xl xl:text-6xl font-bold'
    >
      {emoji} {link} {emoji}
    </h1>
    <CachedDollar />
  </>
}
