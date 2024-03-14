import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"

function Products() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortedProducts, setSortedProducts] = useState([])
  const { categoryName } = useParams()
  const fetchData = async () => {
    try {
      if (categoryName) {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${categoryName}`
        )
        setProducts(response.data)
        setSortedProducts(response.data)
      } else {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
        setSortedProducts(response.data)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [categoryName])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    )
    setSortedProducts(filteredProducts)
  }

  const sortAscendingPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price)
    setSortedProducts(sorted)
  }

  const sortDescendingPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => b.price - a.price)
    setSortedProducts(sorted)
  }

  const sortAscendingTitle = () => {
    const sorted = [...sortedProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
    setSortedProducts(sorted)
  }

  const sortDescendingTitle = () => {
    const sorted = [...sortedProducts].sort((a, b) =>
      b.title.localeCompare(a.title)
    )
    setSortedProducts(sorted)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={sortAscendingPrice}>Sort by Price (Asc)</button>
      <button onClick={sortDescendingPrice}>Sort by Price (Desc)</button>
      <button onClick={sortAscendingTitle}>Sort by Title (Asc)</button>
      <button onClick={sortDescendingTitle}>Sort by Title (Desc)</button>
      <div>
        {sortedProducts.length ? (
          sortedProducts.map((product) => (
            <div key={product.id}>
              <Link to={`/products-Detailed/${product.id}`}>
                <p>{product.title}</p>
              </Link>
            </div>
          ))
        ) : (
          <h1>Products not found</h1>
        )}
      </div>
    </div>
  )
}

export default Products
