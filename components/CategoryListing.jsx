import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryListing({pesh}) {
  return (
    <div className='main'>
        {
            pesh.map((category)=>{
                return(
                     <Link href={`/detailed-page/${category.slug}`} className='card' key={category.id}>
                        <div className="card-image-container">
                            <Image src={category.image} alt={category.title} width={100} height={100}/>
                        </div>
                        <div className="card-title">
                            <h2>{category.title}</h2>                           
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}
