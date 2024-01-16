import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import "../App.css";

function Header({sendInputValue}) {
  let [input, setInput] = useState('');
  let [isToggle, setIsToggle] = useState(false);


  function clickHandler() {
    setIsToggle(!isToggle);
  }
  const handleChange = (e) => {
    let value = e.target.value;
    setInput(value);
    sendInputValue(value);
  }
  return (
    <>
      <nav className="w-full flex justify-between items-center h-20 lg:h-16 px-4 lg:px-14 lg:gap-40">
        <div>
          <Link to="/">
            <h1 className="bg-white text-[#003de7] text-xl lg:text-2xl font-serif font-bold p-2 px-3 tracking-wide  ">
              <span className="italic">e</span> Library.
            </h1>
          </Link>
        </div>

        <div className="lg:w-96 w-48 flex justify-center items-center  border px-1 lg:px-0 rounded-md bg-white border-gray-300  text-left ">
          <CiSearch className="text-[#003de7]  text-2xl font-bold" />
             <input
            className="w-full px-2 outline-0  text-left py-2"
            type="text"
           value={input} onChange={handleChange}
            placeholder="search by name or author"
          />

         
        </div>

        <ul
          className={`${
            isToggle ? "top-16" : "-top-full"
          } lg:hidden  uppercase font-medium max-lg:w-full max-lg:bg-gray-100 absolute left-0 z-10 flex items-center py-6 flex-col gap-6  px-6 lg:gap-14  lg:static lg:flex-row `}
        >
          <li>
            {" "}
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 mb-2 border-[#003de7]" : "border-b-0"
                } hover:border-b-2 mb-2 border-[#003de7]`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 mb-2 border-[#003de7]" : "border-b-0"
                } hover:border-b-2 mb-2 border-[#003de7]`
              }
            >
              Categories
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 mb-2 border-[#003de7]" : "border-b-0"
                } hover:border-b-2 mb-2 border-[#003de7]`
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 mb-2 border-[#003de7]" : "border-b-0"
                } hover:border-b-2 mb-2 border-[#003de7]`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${
                  isActive ? "border-b-2 mb-2 border-[#003de7]" : "border-b-0"
                } hover:border-b-2 mb-2 border-[#003de7]`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          className="toggleBtn text-2xl font-bold lg:hidden"
          onClick={clickHandler}
        >
          {isToggle ? (
            <IoCloseSharp className="text-[#003de7]" />
          ) : (
            <CiMenuBurger className="text-[#003de7]" />
          )}
        </button>
      </nav>
    </>
  );
}

export default Header;
