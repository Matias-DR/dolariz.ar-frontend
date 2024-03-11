'use client'

import { Dollars, Quotation } from '@/types'

import useSWR from 'swr'

const dollarProps: Record<Quotation, Record<string, string | number>> = {
  [Quotation.OFFICIAL]: {
    key: 'official-dollar',
    title: 'Dolar Official'
  },
  [Quotation.BLUE]: {
    key: 'blue-dollar',
    title: 'Dolar Blue'
  },
  [Quotation.CCL]: {
    key: 'ccl-dollar',
    title: 'Dolar CCL'
  },
  [Quotation.MEP]: {
    key: 'mep-dollar',
    title: 'Dolar MEP'
  },
  [Quotation.LEDES]: {
    key: 'ledes',
    title: 'LEDES'
  }
}

const dollarCard = (
  quotation: Quotation,
  buying_price: number | string,
  selling_price: number | string
) => {
  const { key, title } = dollarProps[quotation]

  return <section
    key={`${key}-section`}
    className='size-full'
  >
    <a
      key={`${key}-link`}
      href='#'
      className='size-full flex gap-2 flex-col justify-center items-center bg-green-500 bg-opacity-25 rounded-lg border-4 border-amber-200 border-opacity-50 hover:bg-opacity-45'
    >
      <h2
        key={`${key}-title`}
        className='text-xl font-bold'
      >
        {title}
      </h2>
      <div
        key={`${key}-buying-price-container`}
        className='text-center'
      >
        <h3
          key={`${key}-buying-title`}
          className=''
        >
          Compra
        </h3>
        <p
          key={`${key}-buying-price`}
          className='text-4xl font-bold'
        >
          ${buying_price}
        </p>
      </div>
      <div
        key={`${key}-selling-price-container`}
        className='text-center'
      >
        <h3
          key={`${key}-selling-title`}
          className=''
        >
          Venta
        </h3>
        <p
          key={`${key}-selling-price`}
          className='text-4xl font-bold'
        >
          ${selling_price}
        </p>
      </div>
    </a>
  </section>
}

export default function CachedDollar() {
  const { data, error } = useSWR<Dollars>('multiple/')

  const dollar = (quotation: Quotation) => {
    const loading = dollarCard(
      quotation,
      '...',
      '...'
    )

    if (!data || error) return loading

    const dollar = data[quotation]

    if (!dollar) return loading

    const prices = {
      buying_price: String(dollar.buying_price).replace('.', ','),
      selling_price: String(dollar.selling_price).replace('.', ',')
    }

    return dollarCard(
      quotation,
      prices.buying_price,
      prices.selling_price
    )
  }

  return <article
    key='cached-dollar-article'
    className='grid gap-4 grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-5 xl:grid-rows-1'
  >
    {dollar(Quotation.OFFICIAL)}
    {dollar(Quotation.BLUE)}
    {dollar(Quotation.CCL)}
    {dollar(Quotation.MEP)}
    {dollar(Quotation.LEDES)}
  </article >
}
