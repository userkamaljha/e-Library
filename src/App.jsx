import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce';


function App() {
  let [books , setbooks] = useState([])
  let [query, setQuery] = useState('');
  let [fav ,  setFav] = useState([]);

  const getFavorites = (value) => {
    setFav(value);
  };
  const debouncedSearch = debounce(async (value) => {
    try {
      const apiUrl = value.trim() === '' ? `${import.meta.env.VITE_FETCH_URL}mostread&maxResults=30&key=${import.meta.env.VITE_API_KEY}` : `${import.meta.env.VITE_FETCH_URL}${value}&maxResults=30&key=${import.meta.env.VITE_API_KEY}`;

      const response = await axios.get(apiUrl);
      setbooks(response.data.items);
      setQuery(value)
    } catch (error) {
        console.error('Error fetching books:', error);
    }
  }, 700);

  const sendInputValue = (value) => {
    debouncedSearch(value);
  };

  useEffect(() => {
    debouncedSearch('');
  }, []);


  return (
    <>
    <Header sendInputValue={sendInputValue} debounce = {debounce} />
    <Outlet context = {[books , query, getFavorites, fav ]}   />
    <Footer/>

    </>
  )
}

export default App
 
  //  useEffect(()=>{
  //   
  //   let url1 = `${import.meta.env.VITE_FETCH_URL}${query || 'mostreadbook'}&startIndex=0&maxResults=30`;
  //   let url2 = `${import.meta.env.VITE_FETCH_URL}${query || 'mostreadbook'}&startIndex=0&maxResults=30&key=${import.meta.env.VITE_API_KEY}`;

  //   //IIF
  //    ;(async()=>{
      
  //     try {
  //       let response = await axios.get(url1,{signal: controller.signal})
  //       setbooks(response.data.items);

  //     } catch (error) {
  //       if(axios.isCancel(error)){
  //         console.log('cancelling prevous req', error);
  //         return
  //       }
  //       console.log('error', error);
  //     }
  //   })()
    
  //   return ()=>{
  //     controller.abort()
  //   }

  // },[query])