import {Link , NavLink, useNavigate} from 'react-router-dom'
import { FaHome, FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { IoMail, IoCopy, IoBookmarkSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useOutletContext } from "react-router-dom";;
import { useState, useEffect } from 'react';

function Favorites() {
  let navigate = useNavigate()
  let [books, query, getFavorites,fav] = useOutletContext()
  let placeholder = "https://houseofit.ph/assets/img/no-image.png";
 
  ////////////////////// favorites feature code start //////////////////////////
  let [favorites, setfavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setfavorites(storedFavorites);
    }
  }, []);

  let favCheck = (id) => {
    let flag = favorites.some((book) => book.id === id);
    return flag;
  };

  let addFavorites = (book) => {
    let oldFav = [...favorites];
    let newFav = oldFav.concat(book);
    setfavorites(newFav);
    // Update local storage with the new favorites array
    localStorage.setItem("favorites", JSON.stringify(newFav));
  };

  // send to app.jsx
  getFavorites(favorites);

  let removeFavorites = (id) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
   const updatedFavorites = currentFavorites.filter((favorite) => favorite.id !== id);
    setfavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

  };

  ////////////////////// favorites feature code ends //////////////////////////


  return (
    <>
    <div className="md:min-h-screen  md:flex md:justify-center md:p-4 md:gap-4 px-4 md:items-start">
      <div className=" hidden  md:block md:w-1/4 md:m-0 h-screen md:rounded-2xl md:py-8 md:px-6 bg-gray-100">

      <ul className="flex flex-col p-4   gap-6">
          <li >
           <NavLink to="/" className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': 'bg-gray-100 shadow-none text-gray-400'} ' p-4 flex gap-3 items-center justify-start md:rounded-md text-xl'`}>
           <FaHome className='text-xl'/> Home
            </NavLink>
            </li>
          <li >
          <NavLink
              to="/categories"
              className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': 'bg-gray-100 shadow-none text-gray-400'} ' p-4 flex gap-3 items-center justify-start md:rounded-md text-xl'`}
            >
             <BiSolidCategory className='text-xl'/> Categories
            </NavLink> </li>
          <li>
           <NavLink
            className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': 'bg-gray-100 shadow-none text-gray-400'} ' p-4 flex gap-3 items-center justify-start md:rounded-md text-xl'`}
              to="/books"
            >
            <ImBooks className='text-xl '/>  Books
            </NavLink></li>
          <li>
           <NavLink
              to="/about"
              className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': 'bg-gray-100 shadow-none text-gray-400'} ' p-4 flex gap-3 items-center justify-start md:rounded-md text-xl'`}
            >
             <FaUser className="text-md"/> About
            </NavLink></li>
          <li>
           <NavLink
           className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': 'bg-gray-100 shadow-none text-gray-400'} ' p-4 flex gap-3 items-center justify-start md:rounded-md text-xl'`}
              to="/contact"
            >
             <IoMail className='text-xl '/> Contact
            </NavLink></li>

        </ul>
       
      </div>

      <div className="h-full md:py-6 w-full py-16 md:px-6 md:w-3/4">
        <h2 className="text-2xl  md:px-2 font-semibold">Home</h2>
        <div className="md:flex w-full md:justify-between items-center">
          <div>
          <ul className="bg-gray-200 flex capitalize justify-between overflow-hidden rounded-md my-6 md:gap-3 py-1 px-1">
              <li>
              <NavLink className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': ' shadow-none text-gray-400'} flex items-center md:gap-4 gap-2 py-2 px-6 md:px-20 rounded-md`}  to= '/'>
              <IoCopy className="text-sm"/> all
              </NavLink>
              </li>
              <li>
              <NavLink to='/favorites' className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': ' shadow-none text-gray-400'} flex items-center md:gap-4 gap-2 py-2 px-6 md:px-20 rounded-md`} >
              <MdOutlineStarPurple500 className="text-lg"/>favorites
              </NavLink>
              </li>
              <li>
              <NavLink to='/saved' className={({isActive})=>`${isActive ? 'bg-white shadow-md text-[#003de7] font-semibold': ' shadow-none text-gray-400'} flex items-center md:gap-4 gap-2 py-2 px-6 md:px-20 rounded-md`} >
              <IoBookmarkSharp className="text-md" />saved
              </NavLink>
              </li>
            </ul>
          </div>
          {/* <div>
            <button className=" hidden lg:block p-2 border-2 rounded-md px-3 border-gray-200">sort by author</button>
          </div> */}
        </div>

        <div className="flex justify-between lg:justify-start lg:gap-20 flex-wrap"
         >
         
        {fav.length>0 ? fav.map((book)=>(
          <div className=' w-36'>
         <div className=" relative hover:scale-110   transition duration-400 cursor-pointer bg-green-100 rounded-lg  object-center h-40 w-full   lg:h-36  text-center my-6">
            <img
              onClick={() => navigate(`/books/${book.id}`)}
              className=" h-full w-full  rounded-lg"
              title={book.volumeInfo.title}
              src={book.volumeInfo.imageLinks?.smallThumbnail || placeholder}
              alt="cover img"
            />
          </div>
          <div className="w-full">
            <h2
              className="truncate capitalize font-semibold"
              title={book.volumeInfo.title}
            >
              {book.volumeInfo.title}
            </h2>
            <p className="truncate cursor-pointer">
              by{" "}
              <span className="text-[#003de7] hover:underline">
                {book.volumeInfo.authors || "not found"}
              </span>{" "}
            </p>
            {favCheck(book.id) ? (
              <button
                className="p-2 bg-gray-100 rounded-md my-2"
                onClick={() => removeFavorites(book.id)}
              >
                {" "}
                Remove Favorites
              </button>
            ) : (
              <button
                className="p-2 bg-gray-100 rounded-md my-2"
                onClick={() => addFavorites(book)}
              >
                {" "}
                Add to Favorites
              </button>
            )}
          </div>
          </div>
         ))  : <div className='h-72 lg:py-52 w-full rounded-lg bg-gray-100  flex gap-4 flex-col items-center justify-center'>
         <h1 className=' text-center font-medium text-lg lg:font-semibold'>🌈You don't have favorite book yet!!!</h1>
        </div>
          }
      </div>
      </div>

  </div>
        </>
  )
}

export default Favorites

