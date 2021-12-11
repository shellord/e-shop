import Link from 'next/link'
import { AiOutlineShop } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CartIcon } from '../../components'
import { useState } from 'react'
import { GrClose } from 'react-icons/gr'

export default function Navbar() {
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
        <div className='flex items-center flex-1 md:flex-none justify-center'>
          <AiOutlineShop className='text-blue-500 text-3xl' />
          <span className='pl-2 text-xl font-bold'> e-shop</span>
        </div>
        <ul className='flex items-center space-x-10'>
          <li className='hover:text-blue-500 font-light text-lg hidden md:block'>
            <Link href='#'>HOME</Link>
          </li>
          <li className='hover:text-blue-500 font-light text-lg hidden md:block'>
            <Link href='#'>SHOP</Link>
          </li>
          <li className='hover:text-blue-500 '>
            <Link href='#' passHref>
              <CartIcon count={10} />
            </Link>
          </li>
        </ul>
      </div>
      <ul
        className={`md:hidden ${
          active ? '' : 'hidden'
        } absolute bg-white w-screen z-10 h-screen`}
      >
        <li className='text-lg hover:bg-gray-300 p-3'>Home</li>
        <li className='text-lg hover:bg-gray-300 p-3'>Shop</li>
        <li className='text-lg hover:bg-gray-300 p-3'>Cart</li>
      </ul>
    </nav>
  )
}
