import Image from 'next/image'
import React from 'react'

export default function ProductListing({produ}) {
  return (
    <div className='main'>
        {
            produ.map((product)=>{
                return(
                     <div className='card' key={product.id}>
                        <div className="card-image-container">
                            <Image src={product.image}Image alt={product.title} width={100} height={100}/>
                        </div>
                        <div className="card-title">
                            <a href={product.link}><h2>{product.title}</h2></a>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
