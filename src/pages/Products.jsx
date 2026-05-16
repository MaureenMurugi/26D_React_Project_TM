import React,{useState} from 'react'

import { useProducts } from '@/context/ProductContext'


import ProductList from '@/components/ProductList'
import SearchBar from '@/components/SearchBar'
import LoadingSpinner from '@/components/LoadingSpinner'

function Products() {

  const { products, loading} = useProducts();
  const [ search, setSearch] = useState('');

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))

  if(loading) {
    return <LoadingSpinner />
  }

  
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold'>Products</h1>

        <p className='text-slate-500 mt-2'>Browse through our Mother's day Sales</p>
      </div>
      <SearchBar
        value={search}
        onChange={setSearch} />

      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Products
