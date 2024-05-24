import React, { createContext, useState } from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage'

export const MainContextwishlist=createContext()

function MainProvaiderwishlist({children}) {

    const [wishlist,setwishlist]=UseLocalStorage("wishlist",[])

    function addwishlist(item) {

        const index= wishlist.findIndex((x)=> x._id === item._id)

        if (index !== -1) {
            return setwishlist(wishlist.filter((x)=>x._id !== item._id))
        }
        else{
            setwishlist([...wishlist,item])
        }
    }
   
    function isExist(item) {
        return wishlist.find((x)=>x._id === item._id)
    }
    
  return (
    <MainContextwishlist.Provider value={{wishlist,addwishlist,isExist}}>
        {children}
    </MainContextwishlist.Provider>
  )
}

export default MainProvaiderwishlist