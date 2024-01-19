import { FaHome, FaUser } from "react-icons/fa";
import {  BiSolidCategory } from "react-icons/bi";
import { ImBooks} from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'



function Bookname() {
  let {id} = useParams();
  let [book, setBook] = useState({})
  useEffect(()=>{
    let url = `${import.meta.env.VITE_BOOK_DETAILS_URL}${id}`
       ;(async()=>{
          try {
            let response = await axios.get(url)
            setBook(response.data);
          } catch (error) {
            console.log('error', error);
          }
        })()

  },[]);

  const removeHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  let description = removeHtmlTags(book.volumeInfo?.description || 'Not Avialable' )
  

  return (
    <>
    <div className="min-h-screen lg:flex justify-between p-4 gap-4 items-start">
    <div className=" hidden  lg:block lg:w-1/4 lg:m-0 h-screen lg:rounded-2xl lg:py-8 lg:px-6 bg-gray-100">

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

    <div className=" flex-col w-full rounded-2xl min-h-full lg:py-32 lg:w-3/4 py-10 lg:flex-row flex items-center justify-around">
       <div className=" h-72 w-3/4 lg:h-96 lg:w-1/4  bg-gray-200 shadow-xl">
          <img src={book.volumeInfo?.imageLinks?.thumbnail || 'https://cdn.spinn.com/assets/img/empty.jpeg'} className="h-full w-full"  alt=" not found" />
       </div>

      <div className="w-3/4 lg:w-2/4 flex flex-col px-2 gap-2 lg:gap-4 my-6 lg:my-2">
      <h1 className="text-2xl font-semibold captialize"> {book.volumeInfo?.title || 'Not Available'}</h1>
      <p className="text-lg">Authors: <span className="text-md captilize text-gray-600">{book.volumeInfo?.authors || 'Not Available'}</span></p>
      <p className="text-lg">Pusblish: <span className="text-md captilize text-gray-600">{book.volumeInfo?.publisher || 'Not Available'}</span></p>
      <p className="text-lg">Date: <span className="text-md captilize text-gray-600">{book.volumeInfo?.publishedDate || 'Not Available'}</span></p>
      <p className=" text-lg ">Description: <br/> <span className=" text-md captilize line-clamp-3 hover:line-clamp-none hover:delay-200 text-gray-600">{description}</span></p>
      <p className="text-lg">Categories: <span className="text-md captilize text-gray-600">{book.volumeInfo?.categories || 'Not Available'}</span></p>
      <div className=" flex gap-2 my-4 ">
      <button  className="px-4 py-2 lg:text-lg cursor-not-allowed bg-[#003de7]  text-white" title="preview not avilable"> Preview </button>
      <br />
      {/* {book.accessInfo?.pdf?.acsTokenLink !== undefined ? ( */}
        <Link to={`https://books.google.com.pk/books?id=${id}&lpg=PP1&pg=PP1&output=embed`} target= '_blank'className="px-4 py-2 lg:text-lg border border-[#003de7]">Read Online</Link>
      {/* ): <h3 className="px-4 py-2 lg:text-lg border border-[#003de7]" title="Download pdf not avialable">Not Available</h3>} */}
      </div>
      </div>
      
    </div>

    </div>
    
    </>
    
  );
}

export default Bookname;
