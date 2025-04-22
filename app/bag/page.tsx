"use client"

import { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { allItems, type Item } from "../data/categories"

export default function BagPage() {
  const [bagItemObjects, setBagItemObjects] = useState<Item[]>([])

  useEffect(() => {
    loadBagItemObjects()
  }, [])

  const loadBagItemObjects = () => {
    const bagItemsStr = localStorage.getItem("bagItems")
    const bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []

    const itemObjects = bagItems
      .map((itemId: string) => {
        return allItems.find((item) => item.id === itemId)
      })
      .filter(Boolean)

    setBagItemObjects(itemObjects as Item[])
  }

  const removeFromBag = (itemId: string) => {
    const bagItemsStr = localStorage.getItem("bagItems")
    let bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []

    bagItems = bagItems.filter((id: string) => id !== itemId)
    localStorage.setItem("bagItems", JSON.stringify(bagItems))

    loadBagItemObjects()
    // Dispatch custom event for bag update
    window.dispatchEvent(new Event("bagUpdated"))
  }

  // Calculate summary values
  const totalItems = bagItemObjects.length
  const totalMRP = bagItemObjects.reduce((sum, item) => sum + item.original_price, 0)
  const totalDiscount = bagItemObjects.reduce((sum, item) => sum + (item.original_price - item.current_price), 0)
  const convenienceFee = 99
  const finalPayment =
    bagItemObjects.reduce((sum, item) => sum + item.current_price, 0) + (totalItems > 0 ? convenienceFee : 0)

  return (
    <>
      <Header />
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItemObjects.length === 0 ? (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>Your bag is empty</h2>
                <p>Add items to your bag to see them here</p>
              </div>
            ) : (
              bagItemObjects.map((item) => (
                <div key={item.id} className="bag-item-container">
                  <div className="item-left-part">
                    <img src={item.image || "/placeholder.svg"} alt={item.item_name} className="bag-item-img" />
                  </div>
                  <div className="item-right-part">
                    <div className="company">{item.company}</div>
                    <div className="item-name">{item.item_name}</div>
                    <div className="price-container">
                      <span className="current-price">Rs {item.current_price}</span>
                      <span className="original-price">Rs {item.original_price}</span>
                      <span className="discount-percentage">{item.discount_percentage}% OFF</span>
                    </div>
                    {item.return_period && (
                      <div className="return-period">
                        <span className="return-period-days">{item.return_period} days</span> return available
                      </div>
                    )}
                    {item.delivery_date && (
                      <div className="delivery-details">
                        Delivery by
                        <span className="delivery-details-days"> {item.delivery_date}</span>
                      </div>
                    )}
                  </div>
                  <div className="remove-from-cart" onClick={() => removeFromBag(item.id)}>
                    X
                  </div>
                </div>
              ))
            )}
          </div>

          {bagItemObjects.length > 0 && (
            <div className="bag-summary">
              <div className="bag-details-container">
                <div className="price-header">PRICE DETAILS ({totalItems} Items)</div>
                <div className="price-item">
                  <span className="price-item-tag">Total MRP</span>
                  <span className="price-item-value">Rs {totalMRP}</span>
                </div>
                <div className="price-item">
                  <span className="price-item-tag">Discount on MRP</span>
                  <span className="price-item-value priceDetail-base-discount">-Rs {totalDiscount}</span>
                </div>
                <div className="price-item">
                  <span className="price-item-tag">Convenience Fee</span>
                  <span className="price-item-value">Rs {convenienceFee}</span>
                </div>
                <hr />
                <div className="price-footer">
                  <span className="price-item-tag">Total Amount</span>
                  <span className="price-item-value">Rs {finalPayment}</span>
                </div>
              </div>
              <button className="btn-place-order">
                <div>PLACE ORDER</div>
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
