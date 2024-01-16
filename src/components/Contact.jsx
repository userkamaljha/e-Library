import {Link , NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";

function Contact() {
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
      </div>

      <div className="h-full md:py-6 w-full py-16 md:px-6 md:w-3/4">
        <h2 className="text-2xl  md:px-2 font-semibold">Conatct Us</h2>
      
        <div className=" w-full my-10 rounded-2xl lg:min-h-96 justify-start flex flex-col items-center  px-6 lg:px-24  gap-5 py-16 "
         >
          <h2 className='text-xl lg:text-2xl uppercase font-semibold text-[#003de7]'>Get In Touch</h2>
          <form action='https://formspree.io/f/xjvnkbln' method='POST' className=' flex flex-col gap-6 justify-center items-center w-full lg:w-3/4'>
            <div className='flex gap-4 border rounded-lg py-3 lg:py-4 px-4 items-center justify-between w-full'>
            <span><FaUser className='my-2 text-[#003de7] text-lg'/></span> <input name='username' type="text" placeholder='Name' autoComplete= 'off' required className='w-full px-2 outline-none text-lg lg:text-xl ' />
            </div>
            <div className='flex gap-4 border rounded-lg py-3 lg:py-4 px-4 items-center justify-between w-full'>
            <span><IoMail className='my-2 text-[#003de7] text-xl'/></span> <input type="email" autoComplete='off' placeholder='Email'name='email' required className='w-full px-2 outline-none text-lg lg:text-xl' />
            </div>
            <div className='flex gap-4 border rounded-lg py-3 lg:py-4 px-4  justify-between w-full'>
            <span><FaMessage className='my-2 text-[#003de7] text-lg'/></span>  <textarea name="message" autoComplete='off' placeholder='Message' required className=' w-full  outline-none text-lg lg:text-xl pb-5  px-4' rows="5"></textarea>
            </div>
           
            <button type='submit' className='bg-[#003de7] p-2 px-10 text-white border hover:bg-white hover:border-[#003de7] hover:text-[#003de7] text-lg rounded-sm'>Send</button>
          </form> 
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Contact