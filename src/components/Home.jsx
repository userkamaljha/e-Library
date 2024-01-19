import { NavLink} from 'react-router-dom'
import { FaHome, FaUser } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { IoMail, IoCopy, IoBookmarkSharp } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Card from "./Card";
import { useOutletContext } from "react-router-dom"; 
import { SpinnerCircularFixed } from 'spinners-react';



function Home() {
  let [books, query, getFavorites,fav] = useOutletContext()

  return (
    <>
    <div className="md:min-h-screen md:flex md:justify-center md:p-4 md:gap-6  px-4 md:items-start">
      <div className=" hidden  md:block md:w-1/4 md:m-0 h-full md:rounded-2xl md:py-8 md:px-6 bg-gray-100">

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
        <h2 className="text-2xl  md:px-2 font-semibold">Home</h2>
        <div className="md:flex w-full md:justify-between items-center">  <div>
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

          <div>
            {/* <button className=" hidden lg:block p-2 border-2 rounded-md px-3 border-gray-200">sort by author</button> */}
          </div>
        </div>
        
        <h1 className='text-2xl lg:px-3 capitalize font-semibold'>{query || 'Most Read Books'}</h1>
       
       {books?.length !== 0 ? ( <div className="grid grid-cols-2 rounded-2xl gap-6 gap-y-6 lg:grid-cols-5 lg:gap-20 lg:gap-y-8 lg:p-3 lg:min-h-96"
         >
        <Card key={books?.id} getFavorites= {()=>{getFavorites}} books = {books}/>
        </div>) :<div className="flex h-96 justify-center items-center"
         >  
         <SpinnerCircularFixed size={90} thickness={180} speed={108} color="rgba(0, 61, 231, 1)" secondaryColor="rgba(156, 163, 175, 1" />
      
          </div> }
      </div>
      
    </div>
    </>
  )
}

export default Home