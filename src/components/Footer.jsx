import React from 'react'
import { Link } from 'react-router-dom'
import {FaTwitter , FaInstagram, FaFacebook} from 'react-icons/fa'



function Footer() {
  return (
    <>
    <footer className='w-full bottom-0 min-h-60 bg-gray-100  text-black'>
        <div className="bg-[#003ee76d] w-full h-0.5"></div>
        <div className="footer-content flex flex-col items-center px-12 lg:flex-row lg:py-12 lg:justify-between  ">
            <div className=' w-full text-center border-b-2 lg:border-b-0 py-4'>
            {/* <Link to="/home" className='w-full' title='Home Page'> */}
            <h1 className="  flex items-center justify-center w-full text-center text-[#003de7] text-xl lg:text-3xl font-serif font-bold p-2 px-3 tracking-wide  "><span className="italic">e</span> Library.</h1>
          {/* </Link> */}
                {/* <div className="logo text-3xl lg:text-5xl lg:py-6 py-2 text-[#003de7]">E-Library</div> */}
                <address className='text-xl leading-9'>
                123 Model Town <br /> New Delhi,  India <br /> (91+)1234 567890
                </address>
                <div className=' flex py-4 gap-5  justify-center'>
                    <FaInstagram className='size-7 lg:text-lg text-[#003de7] '/>
                    <FaTwitter  className='size-7 lg:text-lg text-[#003de7] '/>
                    <FaFacebook className='size-7 lg:text-lg text-[#003de7]'/>
                </div>
            </div>
            <div className='w-full flex justify-around text-center  py-4'>
                <div>
                <h3 className='text-xl font-semibold py-2'>Explore</h3>
                <ul className='flex flex-col gap-2'>
                    <li className='text-lg text-center '>Home</li>
                    <li className='text-lg text-center  ' >About</li>
                    <li className='text-lg text-center ' >Books</li>
                    <li className='text-lg text-center' >Contact</li>
                </ul>
                </div>
                <div>
                <h2 className='text-xl font-semibold py-2'>Legal</h2>
            <ul className='flex flex-col gap-2'>
                    <li className='text-lg text-center  hover: '>Terms of Service</li>
                    <li className='text-lg text-center  hover:pointer '>Private policy</li>
                </ul>
                </div>
                
           
            </div>
            
        </div>
    </footer>
    </>
  )
}

export default Footer