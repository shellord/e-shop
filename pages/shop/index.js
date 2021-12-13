import { ProductCard } from '../../components'
import products from '../../data/products'
import Rating from 'react-rating'

export default function Shop() {
  return (
    <div className='pt-20 flex md:max-w-5xl mx-auto  '>
      <div className='flex flex-row flex-wrap justify-evenly md:justify-between mt-10'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        <ProductCard key={products[0].id} product={products[0]} />
      </div>
    </div>
  )
}
