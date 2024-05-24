import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
  const {id}=useParams()

  const [product,setproduct]=useState(id)

  async function getProduct() {
    const res=await fetch("http://localhost:3000/product/"+id)
    const data=await res.json()
    setproduct(data)
  }

  useEffect(()=>{
    getProduct()
  },[])
  return (
    <div>
      <div>
        <img src={product.image} alt="" />
        <h3>{product.name}</h3>
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
      </div>
    </div>
  )
}

export default Detail