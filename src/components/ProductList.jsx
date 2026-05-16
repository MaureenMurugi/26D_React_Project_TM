import { useParams } from "react-router-dom"

import { useProducts } from "@/context/ProductContext"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Button } from "@/components/ui/button"

import { useCart } from "@/context/CartContext"



function ProductList() {
  const { id } = useParams()
  const { products, loading } = useProducts()
  const { addToCart } = useCart()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (loading) {
    return <LoadingSpinner />
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">No Products Found</h2>

        <p className="text-slate-500 mt-2">Try searching for something else</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      {products.map((product) => (
         <div className="grid md:grid-cols-2 gap-10" >
      {/* Product Image */}
      <div className="bg-white rounded-2xl p-8 border">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 w-full object-contain" />
      </div>

      {/* Product Information */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-slate-500">{product.category}</p>
          <h1 className="text-4xl font-bold mt-2">{product.title}</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">{product.price}</span>
          <span className="bg-green-100 text-black-700 text-sm px-3 py-1 rounded-full">{product.rating}</span>
        </div>
      </div>
      <div>

        {/* Add to Cart */}
        <div>
          <Button
            className="w-full"
            size="lg"
            onClick={() => addToCart(product)}>Add To Cart</Button>
        </div>
      </div>
    </div>
      ))}

      
    </div>
    
  )
}

export default ProductList
