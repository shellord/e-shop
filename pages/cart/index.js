import Image from 'next/image'
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDelete,
} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../../redux/cart/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const _handleOnDeleteClick = (item) => {
    dispatch(removeFromCart(item))
  }

  const _handleDecrementClick = (item) => {
    dispatch(decrementQuantity(item))
  }

  const _handeIncrementClick = (item) => {
    dispatch(incrementQuantity(item))
  }
  return (
    <div className='md:max-w-5xl mx-auto flex p-10 flex-col space-y-10'>
      {cart.cartItems.map((item, index) => (
        <div key={index} className='flex w-full  items-center '>
          <div key={index} className='flex flex-col'>
            <Image src={item.image} width={80} height={80} alt='product' />
          </div>
          <div className='ml-10 w-56 overflow-scroll'>{item.title}</div>
          <div className='flex items-center ml-40'>
            <button onClick={() => _handleDecrementClick(item)}>
              <MdKeyboardArrowLeft size={30} />
            </button>
            <span className='mx-5'>{item.quantity}</span>
            <button onClick={() => _handeIncrementClick(item)}>
              <MdKeyboardArrowRight size={30} />
            </button>
          </div>
          <div className='flex flex-1 justify-end'>${item.price}</div>
          <div className='ml-10'>
            <button onClick={() => _handleOnDeleteClick(item)}>
              <MdDelete size={24} color='red' />
            </button>
          </div>
        </div>
      ))}
      {/* <div className='flex justify-end bg-red-500 pr-10 justify-between'>
        <span>${cart.totalQuantity}</span>
        <span>{cart.totalPrice}</span>
      </div> */}
    </div>
  )
}
