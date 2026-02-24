import { useEffect, useState } from "react";

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/category/vehicle')

                const data = await response.json()
                setProducts(data.products)

            } catch (error) {
                setError(error.message || 'Failed to fetch products');
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return { products, loading, error }
}