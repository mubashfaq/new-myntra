export interface Item {
  id: string
  image: string
  company: string
  item_name: string
  original_price: number
  current_price: number
  discount_percentage: number
  return_period?: number
  delivery_date?: string
  rating: {
    stars: number
    count: number
  }
  category?: string
}

export const menItems: Item[] = [
  {
    id: "004",
    image: "/images/4.jpg",
    company: "ADIDAS",
    item_name: "Indian Cricket ODI Jersey",
    original_price: 999,
    current_price: 999,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 5.0,
      count: 10,
    },
    category: "men",
  },
  {
    id: "005",
    image: "/images/5.jpg",
    company: "Roadster",
    item_name: "Pure Cotton T-shirt",
    original_price: 1399,
    current_price: 489,
    discount_percentage: 65,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.2,
      count: 3500,
    },
    category: "men",
  },
  {
    id: "006",
    image: "/images/6.jpg",
    company: "Nike",
    item_name: "Men ReactX Running Shoes",
    original_price: 14995,
    current_price: 14995,
    discount_percentage: 0,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 0.0,
      count: 0,
    },
    category: "men",
  },
  {
    id: "007",
    image: "/images/7.jpg",
    company: "The Indian Garage Co",
    item_name: "Men Slim Fit Regular Shorts",
    original_price: 1599,
    current_price: 639,
    discount_percentage: 60,
    rating: {
      stars: 4.2,
      count: 388,
    },
    category: "men",
  },
  {
    id: "008",
    image: "/images/8.jpg",
    company: "Nivea",
    item_name: "Men Fresh Deodrant 150ml",
    original_price: 285,
    current_price: 142,
    discount_percentage: 50,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.2,
      count: 5200,
    },
    category: "men",
  },
]

export const womenItems: Item[] = [
  {
    id: "001",
    image: "/images/1.jpg",
    company: "Carlton London",
    item_name: "Rhodium-Plated CZ Floral Studs",
    original_price: 1045,
    current_price: 606,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.5,
      count: 1400,
    },
    category: "women",
  },
  {
    id: "002",
    image: "/images/2.jpg",
    company: "CUKOO",
    item_name: "Women Padded Halter Neck Swimming Dress",
    original_price: 2599,
    current_price: 1507,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.3,
      count: 24,
    },
    category: "women",
  },
  {
    id: "003",
    image: "/images/3.jpg",
    company: "NUEVOSDAMAS",
    item_name: "Women Red & White Printed A-Line Knee-Length Skirts",
    original_price: 1599,
    current_price: 495,
    discount_percentage: 69,
    return_period: 14,
    delivery_date: "10 Oct 2023",
    rating: {
      stars: 4.1,
      count: 249,
    },
    category: "women",
  },
]

export const homeItems: Item[] = [
  {
    id: "009",
    image: "/images/beauty.webp",
    company: "BERGNER",
    item_name: "Watt 1700 Air Fryer 7.8 L",
    original_price: 11900,
    current_price: 6199,
    discount_percentage: 48,
    return_period: 7,
    delivery_date: "19 Oct 2024",
    rating: {
      stars: 4.5,
      count: 6800,
    },
    category: "home",
  },
  {
    id: "010",
    image: "/images/home1.jpg",
    company: "URBAN SPACE",
    item_name: "Geometric Print Cushion Covers Set of 5",
    original_price: 1999,
    current_price: 899,
    discount_percentage: 55,
    return_period: 30,
    delivery_date: "15 Oct 2023",
    rating: {
      stars: 4.3,
      count: 1250,
    },
    category: "home",
  },
  {
    id: "011",
    image: "/images/home2.jpg",
    company: "CASA DECOR",
    item_name: "Solid Wood Coffee Table",
    original_price: 12999,
    current_price: 7599,
    discount_percentage: 42,
    return_period: 14,
    delivery_date: "20 Oct 2023",
    rating: {
      stars: 4.7,
      count: 320,
    },
    category: "home",
  },
]

// Combine all items for the bag page and search functionality
export const allItems: Item[] = [...menItems, ...womenItems, ...homeItems]
