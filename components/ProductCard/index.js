import Image from 'next/image'
import Rating from 'react-rating'
import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

export default function ProductCard({ product }) {
  return (
    <div className='flex flex-col w-60 shadow-md  mb-10  group cursor-pointer'>
      <Image
        src={product.image}
        alt='product-image'
        width={80}
        height={200}
        className='object-contain group-hover:scale-110 transition-all duration-200'
      />
      <div className='flex flex-col mt-10 pl-2 pb-2 flex-1 justify-between'>
        <span className='text-sm '>{product.title}</span>
        <div className='flex justify-between pr-2'>
          <span className='text-md font-bold'>${product.price}</span>
          <span>
            <Rating
              readonly
              initialRating={product.rating.rate}
              emptySymbol={<FaRegStar className='text-gray-500' size={14} />}
              fullSymbol={<FaStar className='text-yellow-500' size={14} />}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
