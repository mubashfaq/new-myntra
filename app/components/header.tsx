"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
  const [bagItemCount, setBagItemCount] = useState(0)

  useEffect(() => {
    const bagItemsStr = localStorage.getItem("bagItems")
    const bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
    setBagItemCount(bagItems.length)

    // Add event listener for storage changes
    const handleStorageChange = () => {
      const updatedBagItemsStr = localStorage.getItem("bagItems")
      const updatedBagItems = updatedBagItemsStr ? JSON.parse(updatedBagItemsStr) : []
      setBagItemCount(updatedBagItems.length)
    }

    window.addEventListener("storage", handleStorageChange)
    // Custom event for bag updates
    window.addEventListener("bagUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("bagUpdated", handleStorageChange)
    }
  }, [])

  return (
    <header>
      <div className="logo_container">
        <Link href="/">
          <img className="myntra_home" src="/images/myntra_logo.webp" alt="Myntra Home" width={120} height={45} />
        </Link>
      </div>
      <nav className="nav_bar">
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/">Kids</Link>
        <Link href="/home-living">Home & Living</Link>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" id="searchBar" placeholder="Search for products, brands and more" />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <span className="material-symbols-outlined action_icon">person</span>
          <span className="action_name">Profile</span>
        </div>

        <Link className="action_container" href="/bag">
          <span className="material-symbols-outlined action_icon">shopping_bag</span>
          <span className="action_name">Bag</span>
          <span className="bag-item-count" style={{ visibility: bagItemCount > 0 ? "visible" : "hidden" }}>
            {bagItemCount}
          </span>
        </Link>
      </div>
    </header>
  )
}
