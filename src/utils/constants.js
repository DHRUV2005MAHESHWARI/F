import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      "Empowering Homes, Enriching Lives: Our mission is to curate exceptional furniture that transforms spaces, enhances comfort, and inspires a lifestyle of timeless elegance. Welcome to a world where every piece tells a story of quality, craftsmanship, and the art of living well.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
    "Transform your space with our furniture store – where your vision takes center stage. Immerse yourself in curated collections that blend style and functionality, turning your home into a reflection of your unique taste.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
    "Uncover the legacy of craftsmanship at our furniture store, where every piece tells a story of timeless artistry. Journey through history with our curated collections, where tradition meets innovation to create the perfect narrative for your home.",
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
