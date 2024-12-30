import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import NotFound from './Components/NotFound/NotFound'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About.jsx'


function App() {

  let routers=createBrowserRouter([
    {path:'/', element: <Layout/>, children:[
      {index:true, element:<Home/>},
      {path:'contact', element:<Contact/>},
      {path:'portfolio', element:<Portfolio/>},
      {path:'about', element:<About/>},
      {path:'*', element:<NotFound/>},

    ]}
  ])

  return (
    <>
<RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
