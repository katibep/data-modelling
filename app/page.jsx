import CategoryListing from '@/components/CategoryListing'
import Paragraph from '@/components/paragraph'
import ProductListing from '@/components/ProductListing'
import React from 'react'
import { getCategories } from './api/categories/route'
import { getProducts } from './api/products/route'

export default async function page() {
  const categories = await getCategories();
  const products=await getProducts();
  return (
    <div className='body'>
      <Paragraph/>
      <a href="/contact">contact</a>

      <CategoryListing pesh={categories}/>
      <ProductListing  produ={products}/>
    </div>
  )
}
