import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Categories from './components/Categories.jsx'
import About from './components/About.jsx'
import Books  from './components/Books.jsx'
import Contact from './components/Contact.jsx'
import BookDetails from './components/BookDetails.jsx'
import Favorites from './components/Favorites.jsx'
import Saved from './components/Saved.jsx'
import CategoryList from './components/CategoryList.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'

let router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
      path:'/',
      element: <Home/>,
    },
      {
      path:'/categories',
      element: <Categories/>,
    },
      {
      path:'/books',
      element: <Books/>,
    },
      {
      path:'/about',
      element: <About/>,
    },
      {
      path:'/contact',
      element: <Contact/>,
    },
    {
      path:'/books/:id',
        element: <BookDetails/>
      },
    {
      path:'/home',
        element: <Home/>
      },
    {
      path:'/favorites',
        element: <Favorites/>
      },
    {
      path:'/saved',
        element: <Saved/>
      },
      {
        path:'/categories/:category',
        element: <CategoryList/>
      }
    
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>

)
