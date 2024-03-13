import Link from 'next/link'

interface Props {
  buying_price: number | string
  selling_price: number | string
  htmlKey: string
  title: string
  link: string
}

export default async function DollarCard({
  buying_price,
  selling_price,
  htmlKey,
  title,
  link
}: Readonly<Props>) {
  return <section
    key={`${htmlKey}-section`}
    className='size-full text-zinc-700'
  >
    <Link
      key={`${htmlKey}-link`}
      href={link}
      passHref
      className='size-full py-2 flex gap-2 flex-col justify-center items-center bg-blue-100 rounded-b-lg border-t-8 border-emerald-900 border-opacity-75 hover:bg-blue-200'
    >
      <h2
        key={`${htmlKey}-title`}
        className='text-xl font-bold'
      >
        {title}
      </h2>
      <div
        key={`${htmlKey}-buying-price-container`}
        className='text-center'
      >
        <h3
          key={`${htmlKey}-buying-title`}
          className='font-bold'
        >
          Compra
        </h3>
        <p
          key={`${htmlKey}-buying-price`}
          className='text-2xl sm:text-4xl font-bold text-emerald-700'
        >
          ${buying_price}
        </p>
      </div>
      <div
        key={`${htmlKey}-selling-price-container`}
        className='text-center'
      >
        <h3
          key={`${htmlKey}-selling-title`}
          className='font-bold'
        >
          Venta
        </h3>
        <p
          key={`${htmlKey}-selling-price`}
          className='text-2xl sm:text-4xl font-bold text-emerald-700'
        >
          ${selling_price}
        </p>
      </div>
    </Link>
  </section>
}