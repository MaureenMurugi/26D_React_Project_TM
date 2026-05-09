import { createContext, useContext, useState, useEffect } from "react";

import productsData from '../data/products.json'

const ProductContext = createContext()

export function ProductProvider({ children }) {
    const [ products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setProducts(productsData)
            setLoading(false)
        }, 1000)
    },[])

    return (
        <ProductContext.Provider
            value={{
                products,
                loading
            }}>
                {children}

        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)