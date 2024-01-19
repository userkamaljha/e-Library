import {Link , NavLink, json} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BiLogIn, BiSolidCategory } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import Card from "./Card";
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Categories() {
  let [books] = useOutletContext();
  let navigate = useNavigate()
  let categories = books?.map(book => book.volumeInfo.categories)


  return (
    <>
    <div className="md:min-h-screen md:flex md:justify-center md:p-4 md:gap-4 px-4 md:items-start">
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
        <div className='min-h-60 p-4 my-4 mx-3 shadow-md border rounded-md'>
          <h2 className='my-4 text-lg font-semibold'>🚧 Under Construction:</h2>
          <p className='my-4'>Please note that this website is currently in a 'work in progress' state. I'm dedicating time to refine and enhance the user experience, ensuring it reflects the best of my skills and creativity.</p>
        </div>
      </div>

      <div className="h-full md:py-6 w-full py-16 md:px-6 md:w-3/4">
        <h2 className="text-2xl  md:px-2 font-semibold">Categories</h2>
        
        
        <div className=" grid grid-cols-2 rounded-2xl gap-6 gap-y-6 lg:grid-cols-4 lg:gap-10 lg:gap-y-8 lg:p-3 lg:min-h-full my-10 "
         >
             {categories?.map((category) => (
             <div className='bg-[#4169e1e0] cursor-pointer hover:bg-[#4169e1] rounded-xl text-white w-full flex items-center justify-center text-center h-full p-6 py-16 border' key = {Math.random()} onClick={()=> navigate(`/categories/${category}`)} >

                <h1 className='text-2xl capitalize'>{category || 'not found'}</h1>

              

          </div>
          ))}
            
      
        
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Categories