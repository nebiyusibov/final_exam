import React, { useContext } from 'react'
import { MainContextBasket } from '../../context/MainProvaiderBasket'

function Basket() {
  const {basket,addBasket,decBasket,removebasket}=useContext(MainContextBasket)
  return (
    <div>
      {basket.map((x)=>(
        <div style={{width:"200px"}}>
          <img src={x.image} alt=""  style={{width:"200px" , marginTop:"100px"}}/>
          <h3>{x.name}</h3>
          <h4>{x.title}</h4>
          <h3>{x.price}</h3>
          <button onClick={()=>addBasket(x)}>increase</button>
          {x.count}
          <button onClick={()=>decBasket(x)}>decrease</button>
          <button onClick={()=>removebasket(x)}>delete</button>
        </div>
      ))}
    </div>
  )
}

export default Basket