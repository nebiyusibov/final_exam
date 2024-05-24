import { useEffect, useState } from 'react'

function UseLocalStorage(key,initial) {

    const [data,setdata]=useState(localStorage.getItem(key) ?JSON.parse(localStorage.getItem(key)) :initial)

useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(data))
},[key,data])
  return [data,setdata]
}

export default UseLocalStorage