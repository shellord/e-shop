import Link from 'next/link'
import { AiOutlineShop } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CartIcon } from '../../components'
import { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState(false)

  const _handleOnClick = () => {
    setActive(!active)
  }

  return (
    <nav className='bg-gray-200 max-w-5xl mx-auto shadow-md'>
      <div className='flex md:justify-between p-5'>
        <button
          className='md:hidden flex items-center'
          onClick={_handleOnClick}
        >
          <GiHamburgerMenu className='text-2xl' />
        </button>
        <div className='flex items-center flex-1 md:flex-none justify-center'>
          <AiOutlineShop className='text-blue-500 text-3xl' />
          <span className='pl-2 text-xl font-bold'> e-shop</span>
        </div>
        <ul className='flex items-center space-x-5'>
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
      <ul className={`md:hidden ${active ? '' : 'hidden'}`}>
        <li className='text-sm hover:bg-gray-300 p-2'>Home</li>
        <li className='text-sm hover:bg-gray-300 p-2'>Shop</li>
        <li className='text-sm hover:bg-gray-300 p-2'>Cart</li>
      </ul>
    </nav>
  )
}
