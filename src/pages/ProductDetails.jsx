import { useParams } from "react-router-dom"

import { useProducts } from "@/context/ProductContext"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Button } from "@/components/ui/button"

import { useCart } from "@/context/CartContext"

function ProductDetails() {
  const { id } = useParams()
  const { products, loading } = useProducts()
  const { addToCart } = useCart()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (loading) {
    return <LoadingSpinner />
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">No Products Found</h2>

        <p className="text-slate-500 mt-2">Try searching for something else</p>
      </div>
    )
  }


  return (
   <div>
   
   </div>
  )
}

export default ProductDetails
