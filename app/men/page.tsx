"use client"

import { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ProductList from "../components/product-list"
import Loading from "../components/loading"
import { menItems } from "../data/categories"

export default function MenPage() {
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
      <main>{isLoading ? <Loading /> : <ProductList items={menItems} title="Men's Fashion" />}</main>
      <Footer />
    </>
  )
}
