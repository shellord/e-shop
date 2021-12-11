import Head from 'next/head'
import { HeroSection } from '../components'
import { CategorySection } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>e-shop</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='bg-white min-h-screen md:max-w-5xl mx-auto'>
        <HeroSection />
        <CategorySection />
      </div>
    </>
  )
}
