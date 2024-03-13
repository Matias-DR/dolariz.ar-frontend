import { DollarCard } from '@/components'
import { FRONT_BASE_URL } from '@/constants'
import { Quotation } from '@/types'
import api from '@/app/api'
import { cache } from 'react'

const dollarProps: Record<Quotation, Record<string, string>> = {
  [Quotation.OFFICIAL]: {
    htmlKey: 'official-dollar',
    title: 'DÓLAR OFICIAL',
    link: `${FRONT_BASE_URL}historical/${Quotation.OFFICIAL}/`
  },
  [Quotation.BLUE]: {
    htmlKey: 'blue-dollar',
    title: 'DÓLAR BLUE',
    link: `${FRONT_BASE_URL}historical/${Quotation.BLUE}/`
  },
  [Quotation.CCL]: {
    htmlKey: 'ccl-dollar',
    title: 'DÓLAR CCL',
    link: `${FRONT_BASE_URL}historical/${Quotation.CCL}/`
  },
  [Quotation.MEP]: {
    htmlKey: 'mep-dollar',
    title: 'DÓLAR MEP',
    link: `${FRONT_BASE_URL}historical/${Quotation.MEP}/`
  },
  [Quotation.LEDES]: {
    htmlKey: 'ledes',
    title: 'LEDES',
    link: `${FRONT_BASE_URL}historical/${Quotation.LEDES}/`
  }
}

export const getDollars = cache(async () => {
  try {
    const { data: dollars } = await api.get('dollar/multiple/')
    return dollars
  } catch {
    return null
  }
})

// Revalidate every 12 hours
export const revalidate = 3600 * 12

export default async function CachedDollar() {
  const dollars = await getDollars()

  const dollar = (quotation: Quotation) => {
    const dollar = dollars[quotation]
    const props = dollarProps[quotation]
    if (!dollar) return <DollarCard
      buying_price='...'
      selling_price='...'
      htmlKey={props.htmlKey}
      title={props.title}
      link={props.link}
    />
    return <DollarCard
      buying_price={dollar.buying_price}
      selling_price={dollar.selling_price}
      htmlKey={props.htmlKey}
      title={props.title}
      link={props.link}
    />
  }

  return <article
    key='cached-dollar-article'
    className='grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1'
  >
    {dollar(Quotation.OFFICIAL)}
    {dollar(Quotation.BLUE)}
    {dollar(Quotation.MEP)}
    {dollar(Quotation.CCL)}
    {dollar(Quotation.LEDES)}
  </article >
}
