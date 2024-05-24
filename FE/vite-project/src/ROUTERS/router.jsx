import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/MainPages/Home";
import Basket from "../pages/MainPages/Basket";
import WishList from "../pages/MainPages/WishList";
import Detail from "../pages/MainPages/Detail";
import AdminLayout from "../layout/Adminlayout/AdminLayout";
import AdminPanel from "../pages/AdminPages/AdminPanel";
import Addd from "../pages/AdminPages/Addd";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
               index:true,
               element:<Home></Home>
            },
            {
               path:"basket",
               element:<Basket></Basket>
            },
            {
               path:"wishlist",
               element:<WishList></WishList>
            },
            {
               path:"detail",
               element:<Detail></Detail>
            },
        ]
    },
    {
        path:"/adminpanel",
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                index:true,
                element:<AdminPanel></AdminPanel>
            },
            {
                path:"/adminpanel/add",
                element:<Addd></Addd>
            },
        ]
    }
])