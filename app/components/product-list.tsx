"use client"

import { useEffect, useState } from "react"
import type { Item } from "../data/categories"

interface ProductListProps {
  items: Item[]
  title?: string
}

export default function ProductList({ items, title }: ProductListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [bagItems, setBagItems] = useState<string[]>([])

  useEffect(() => {
    // Initialize bag items from localStorage
    const bagItemsStr = localStorage.getItem("bagItems")
    setBagItems(bagItemsStr ? JSON.parse(bagItemsStr) : [])

    // Set up search functionality
    const searchBar = document.getElementById("searchBar") as HTMLInputElement
    if (searchBar) {
      searchBar.addEventListener("input", (e) => {
        setSearchQuery((e.target as HTMLInputElement).value.toLowerCase())
      })
    }
  }, [])

  const addToBag = (itemId: string) => {
    const updatedBagItems = [...bagItems, itemId]
    setBagItems(updatedBagItems)
    localStorage.setItem("bagItems", JSON.stringify(updatedBagItems))

    // Dispatch custom event for bag update
    window.dispatchEvent(new Event("bagUpdated"))
  }

  const filteredItems = items.filter((item) => {
    if (!searchQuery) return true
    return item.company.toLowerCase().includes(searchQuery) || item.item_name.toLowerCase().includes(searchQuery)
  })

  return (
    <div>
      {title && <h1 className="category_heading">{title}</h1>}
      <div className="items-container" id="items-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="item-container">
            <div className="image-container" style={{ height: "300px", overflow: "hidden" }}>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.item_name}
                className="item-image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">{item.discount_percentage}% OFF</span>
            </div>
            <button className="btn-add-bag" onClick={() => addToBag(item.id)}>
              Add to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
