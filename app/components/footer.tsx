import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/">Kids</Link>
          <Link href="/home-living">Home & Living</Link>
          <Link href="/">Beauty</Link>
          <Link href="/">Gift Card</Link>
          <Link href="/bag">Myntra Insider</Link>
        </div>

        <div className="footer_column">
          <h3>CUSTOMER POLICIES</h3>
          <Link href="/">Contact Us</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">T&C</Link>
          <Link href="/">Terms Of Use</Link>
          <Link href="/">Track Orders</Link>
          <Link href="/">Shipping</Link>
          <Link href="/">Cancellation</Link>
        </div>

        <div className="footer_column">
          <h3>EXPERIENCE MYNTRA APP</h3>
          <Link href="/">Android</Link>
          <Link href="/">iOS</Link>
          <Link href="/">Windows</Link>
        </div>
      </div>
      <hr />
      <div className="copyright">© 2023 www.myntra.com. All rights reserved.</div>
    </footer>
  )
}
