"use client"

import { useState, useEffect } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import ProductList from "./components/product-list"
import Loading from "./components/loading"
import { allItems } from "./data/categories"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for images
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Header />
      <main>{isLoading ? <Loading /> : <ProductList items={allItems} title="All Products" />}</main>
      <Footer />
    </>
  )
}
