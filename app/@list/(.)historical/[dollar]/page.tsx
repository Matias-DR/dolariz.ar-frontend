import {
  Dollar,
  Quotation
} from '@/types'

import api from '@/app/api'
import { cache } from 'react'

export async function generateStaticParams() {
  return [
    { dollar: Quotation.OFFICIAL },
    { dollar: Quotation.BLUE },
    { dollar: Quotation.CCL },
    { dollar: Quotation.MEP },
    { dollar: Quotation.LEDES }
  ]
}

const getHistorical = cache(async (dollar: Quotation) => {
  try {
    const { data: historical } = await api.get(`dollar/?type_of_quote=${dollar}`)
    return historical
  } catch {
    return null
  }
})

interface Params {
  dollar: Quotation
}

interface Props {
  params: Readonly<Params>
}

export default async function Historical({ params: { dollar } }: Readonly<Props>) {
  const historical = await getHistorical(dollar)
  console.log()

  return <article
    key='historical-article'
    className='relative flex flex-col justify-center flex-grow text-center'
  >
    {historical?.map((
      dollar: Dollar,
      index: number
    ) => {
      return <div key={index}>
        Compra: {dollar.price_buy} → Venta: {dollar.price_sell} → Fecha: {dollar.date}<br />
      </div>
    })}
  </article>
}
