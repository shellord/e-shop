import Head from 'next/head'
import { Navbar } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>e-shop</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='bg-white min-h-screen'>
        <Navbar />
      </div>
    </>
  )
}
