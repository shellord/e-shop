import Image from 'next/image'

export default function CategorySection() {
  return (
    <div className='flex px-2 pt-10 pb-5 flex-col'>
      <div className='text-center  pb-10'>
        <h1 className='text-2xl md:text-2xl font-serif'>Shop by Category</h1>
      </div>
      <div className='md:flex md:space-x-5  space-y-5 md:space-y-0 mx-5 md:mx-0'>
        <div className='flex justify-center bg-blue-200 group cursor-pointer shadow-lg'>
          <p className='pl-10 flex items-center text-xl'>
            Men&apos;s Collection
          </p>
          <div className='flex '>
            <Image
              src='/images/category-man.png'
              width={280}
              height={350}
              alt='category'
              priority
              className='object-contain group-hover:scale-110 transition duration-300 ease-in-out'
            />
          </div>
        </div>
        <div className='flex justify-center bg-pink-200 group cursor-pointer shadow-lg'>
          <p className='pl-10 flex items-center text-xl'>
            Women&apos;s Collection
          </p>
          <div className='flex'>
            <Image
              src='/images/category-woman.png'
              width={300}
              height={350}
              alt='category'
              priority
              className='object-fit group-hover:scale-110 transition duration-300 ease-in-out'
            />
          </div>
        </div>
        <div className='flex justify-center bg-blue-200 group cursor-pointer shadow-lg'>
          <p className='pl-10 flex items-center text-xl'>Winter Collection</p>
          <div className='flex'>
            <Image
              src='/images/category-winter.png'
              width={280}
              height={350}
              alt='category'
              priority
              className=' object-contain group-hover:scale-110 transition duration-300 ease-in-out'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
