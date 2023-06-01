import Head from 'next/head'

import { App } from '@/components/App'


export default function Home() {
  return (
    <>
      {/* <Head className='bg-slate-200'>
        <title>Acompanhamento Nutricional</title>
      </Head> */}
      <main className='bg-slate-100'>
       <App /> 

      </main>
    </>
  )
}
