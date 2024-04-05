import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root';
import NotFound from './Pages/NotFound'
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductsDetail from './Pages/ProductsDetail';
import About from './Pages/About';
import Collection from './Pages/Collection';


export default function App() {
  const a=createBrowserRouter(
    [
        {
            path:'/',
            element:<Root/>,
            errorElement:<NotFound/>,
            children:[
                {index:true, element:<Home/>},
                {path:'/shop', element:<Products/>},
                {path:'/shop/:productId', element:<ProductsDetail/>},
                {path:'/about', element:<About/>},
                {path:'/collection', element:<Collection/>},
            ]
        }
    ]
)
  
  return (
    <RouterProvider router={a}/>
  )
}
