import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'


function App() {
  let [books , setbooks] = useState([])
  let [query, setQuery] = useState('');
  let [fav ,  setFav] = useState([]);

  let getFavorites = (value)=>{
    setFav(value)

  }
  let sendInputValue = (value)=>{
      setQuery(value)
    }

  useEffect(()=>{
    let url1 = `${import.meta.env.VITE_FETCH_URL}${query || 'mostreadbook'}&startIndex=0&maxResults=30`;
    let url2 = `${import.meta.env.VITE_FETCH_URL}${query || 'mostreadbook'}&startIndex=0&maxResults=30&key=${import.meta.env.VITE_API_KEY}`;

    fetch(url1 || url2)
    .then((res)=> res.json())
    .then((data)=> setbooks(data.items))
    .catch((err)=> console.log(err))
    
  },[query])
 

  return (
    <>
    <Header sendInputValue={sendInputValue}/>
    <Outlet context = {[books , query, getFavorites, fav ]}   />
    <Footer/>

    </>
  )
}

export default App
