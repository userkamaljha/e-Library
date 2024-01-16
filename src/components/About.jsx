import {Link , NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoCopy } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import Card from "./Card";

function About() {
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
        {/* <div className='min-h-60 p-4 my-4 mx-3 shadow-md border rounded-md'>
          <h2 className='my-4 text-lg font-semibold'>🚧 Under Construction:</h2>
          <p className='my-4'>Please note that this website is currently in a 'work in progress' state. I'm dedicating time to refine and enhance the user experience, ensuring it reflects the best of my skills and creativity.</p>
        </div> */}
      </div>

      <div className="h-full md:py-6 w-full py-16 md:px-6 md:w-3/4 ">
        <h2 className="text-2xl  md:px-2 font-semibold">About Us</h2>
        <div className=" w-full my-10 rounded-2xl lg:min-h-96 justify-start flex flex-col items-center    px-6 lg:px-24   gap-5 py-16 ">
          <Link to="/home" className='w-full' title='Home Page'>
            <h1 className="  flex items-center justify-center w-full text-center text-[#003de7] text-3xl lg:text-6xl font-serif font-bold p-2 px-3 tracking-wide  "><span className="italic">e</span> Library.</h1>
          </Link>
          <p className='font-semibold capitalize text-center text-xl lg:text-3xl'>An Online Library powered by Google Book API</p>
          <p className=' text-base lg:text-xl my-4 leading-relaxed text-gray-600 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, saepe obcaecati Similique rerum pariatur magnam, architecto libero doloribus sint porro ut aliquam maiores, labore obcaecati voluptatem alias possimus vero Accusamus. 
          Asperiores, praesentium recusandae. Commodi magnam impedit soluta nostrum ipsum dolorem voluptates doloribus non quod Assumenda quaerat porro voluptatem tenetur maiores minus amet, impedit tempore Ducimus sunt id accusamus ab fugit.
        </p>
        </div>

      </div>
      
    </div>
    </>
  )
}

export default About