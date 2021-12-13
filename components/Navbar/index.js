import Link from 'next/link'
import { AiOutlineShop } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CartIcon } from '../../components'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity)
  const [active, setActive] = useState(false)

  const _handleOnClick = () => {
    setActive(!active)
  }

  return (
    <nav className='bg-white  mx-auto shadow-md max-w-5xl fixed left-0 right-0 z-20'>
      <div className='flex md:justify-between p-5'>
        <button
          className='md:hidden flex items-center'
          onClick={_handleOnClick}
        >
          {active ? (
            <GrClose className='text-2xl' />
          ) : (
            <GiHamburgerMenu className='text-2xl' />
          )}
        </button>
        <Link href='/' passHref>
          <div className='flex items-center flex-1 md:flex-none justify-center cursor-pointer'>
            <AiOutlineShop className='text-blue-500 text-3xl' />
            <span className='pl-2 text-xl font-bold'> e-shop</span>
          </div>
        </Link>
        <ul className='flex items-center space-x-10'>
          <li className='hover:text-blue-500 font-light text-lg hidden md:block'>
            <Link href='/'>HOME</Link>
          </li>
          <li className='hover:text-blue-500 font-light text-lg hidden md:block'>
            <Link href='/shop'>SHOP</Link>
          </li>
          <li className='hover:text-blue-500 '>
            <Link href='/cart'>
              <a>
                <CartIcon count={cartQuantity} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <ul
        className={`md:hidden ${
          active ? '' : 'hidden'
        } absolute bg-white w-screen z-10 h-screen flex flex-col items-start flex-1`}
      >
        <Link href='/' passHref>
          <button
            onClick={_handleOnClick}
            className='w-full text-lg hover:bg-gray-300 p-3 flex'
          >
            <li className=''>Home</li>
          </button>
        </Link>
        <Link href='/shop' passHref>
          <button
            onClick={_handleOnClick}
            className='w-full text-lg hover:bg-gray-300 p-3 flex'
          >
            <li>Shop</li>
          </button>
        </Link>
        <button
          onClick={_handleOnClick}
          className='w-full text-lg hover:bg-gray-300 p-3 flex'
        >
          <li>Cart</li>
        </button>
      </ul>
    </nav>
  )
}
