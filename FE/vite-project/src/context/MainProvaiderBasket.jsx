import React, { createContext, useState } from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage'

export const MainContextBasket=createContext()

function MainProvaiderBasket({children}) {

    const [basket,setbasket]=UseLocalStorage("basket",[])

    function addBasket(item) {
        const index= basket.findIndex((x)=> x._id === item._id)
        if (index !== -1) {
            basket[index].count++
            setbasket([...basket])


        }
        else{
            setbasket([...basket,{...item,count:1}])
        }
    }
    function decBasket(item) {
        const index= basket.findIndex((x)=> x._id === item._id)
        if (basket[index].count>1) {
            basket[index].count--
            setbasket([...basket])
        }
    }
function removebasket(item) {
    setbasket(basket.filter((x)=>x._id !== item._id))
}
    
  return (
    <MainContextBasket.Provider value={{basket,addBasket,decBasket,removebasket}}>
        {children}
    </MainContextBasket.Provider>
  )
}

export default MainProvaiderBasket