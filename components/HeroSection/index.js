import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className='flex px-10 bg-blue-200 '>
      <div className='py-10 flex justify-between flex-1'>
        <div className='flex flex-col justify-center'>
          <p className='text-lg font-serif'>Winter Fashion</p>
          <p className='text-4xl font-serif'>Fashion Collection 2021</p>
        </div>
        <Image
          src='/images/hero.png'
          alt='hero'
          width={400}
          height={400}
          priority
        />
      </div>
    </section>
  )
}
