import { useRouter } from 'next/router'
import products from '../../data/products'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'
import Link from 'next/link'
import { MdArrowBackIosNew } from 'react-icons/md'

export default function Product() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState(false)
  const item = products.find((p) => p.id == id)

  useEffect(() => {
    setProduct(item)
  }, [item])

  const _handleOnClick = () => {
    dispatch(addToCart(product))
  }
  return (
    <div className='mx-auto md:max-w-5xl pt-10 '>
      <div className='flex ml-2 mb-10'>
        <Link href='/shop'>
          <a className='flex items-center text-xl'>
            <MdArrowBackIosNew />
            Back
          </a>
        </Link>
      </div>
      <div className='md:flex'>
        {product ? (
          <>
            <div className='flex w-full'>
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className='object-contain'
              />
            </div>
            <div className='flex flex-col pl-2 md:pl-10 pt-10 items-start'>
              <h1 className='text-3xl'>Product {product.title}</h1>
              <p className='pt-10 text-lg'>{product.description}</p>
              <div className='flex space-x-10 items-center my-10'>
                <p className='text-2xl font-bold'>${product.price}</p>
                <button
                  className='bg-cyan-300 py-3 px-3  rounded-full shadow-md hover:bg-cyan-500'
                  onClick={_handleOnClick}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}
