import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Pages/ErrorPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },{
          path:"/about",
          element:<About/>
        },{
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/country",
          element:<Country/>
        }
      ]
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
