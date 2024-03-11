import CachedDollar from '@/cached-dollar'

export default async function Page() {
  return <main
    key='main'
    className='p-4'
  >
    <h1
      key='title'
      className='mb-4 text-center font-bold'
    >
      DOLARIZ.AR
    </h1>
    <CachedDollar />
  </main>
}
