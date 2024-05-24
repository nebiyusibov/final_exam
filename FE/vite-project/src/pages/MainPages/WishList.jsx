import React, { useContext } from 'react'
import { MainContextwishlist } from '../../context/MainProvaiderWishList'

function WishList() {
  const {wishlist,addwishlist,isExist} = useContext(MainContextwishlist)
  return (
    <div>
    {wishlist.map((x)=>(
      <div style={{width:"200px"}}>
        <img src={x.image} alt=""  style={{width:"200px" , marginTop:"100px"}}/>
        <h3>{x.name}</h3>
        <h4>{x.title}</h4>
        <h3>{x.price}</h3>
      </div>
    ))}
  </div>
  )
}

export default WishList