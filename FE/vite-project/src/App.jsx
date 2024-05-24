import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ROUTERS/router'
import MainProvaiderBasket from './context/MainProvaiderBasket'
import MainProvaiderwishlist from './context/MainProvaiderWishList'

function App() {

  return (
    <>
    <MainProvaiderBasket>
      <MainProvaiderwishlist>
      <RouterProvider router={router}></RouterProvider>
      </MainProvaiderwishlist>
    </MainProvaiderBasket>
    
    </>
  )
}

export default App
