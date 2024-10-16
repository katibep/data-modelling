import { getCategories } from '@/app/api/categories/route';
import Image from 'next/image';
import React from 'react'

export default function page({params}) {
    const {slug} = params;
    const categories = getCategories();
    const category = categories.find(category=>category.slug === slug);
  return (
    <div>
        <div className="image">
            <Image src={category.image} alt='tv'width={300} height={200}/>

        </div>
        <div className="title">
             {category.title}
        </div>
        <div className="description">
              {category.description}
        </div>
        <div className="price">
            {category.price}
        </div>
    </div>
  )
}
