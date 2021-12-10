import { AiOutlineShoppingCart } from 'react-icons/ai'

export default function CartIcon({ count }) {
  return (
    <div className='relative flex cursor-pointer items-center'>
      <AiOutlineShoppingCart className='text-2xl' />
      <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full'>
        {count}
      </span>
    </div>
  )
}
