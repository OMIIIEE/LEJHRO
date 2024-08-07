import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaRegPaperPlane ,FaLongArrowAltRight} from 'react-icons/fa';
import { CiMenuFries } from "react-icons/ci";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`app sticky top-0 z-50 ${isScrolled ? 'bg-white' : 'bg-[#D6932C]'}`}>
      <nav>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <h1 className={`text-6xl flex items-center ${isScrolled ? 'text-[#2C7FBF]' : 'text-white'}`}>
                <FaRegPaperPlane className="mr-3" />
                LEJHRO
              </h1>
            </Link>
            <div className={`hidden lg:flex items-center gap-20 text-xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              {!isScrolled && (
                <>
                  <Link to="#" className="hover:text-gray-200 transition duration-300 ease-in-out">Innovations</Link>
                  <Link to="#" className="hover:text-gray-200 transition duration-300 ease-in-out">Business Services</Link>
                  <Link to="#" className="hover:text-gray-200 transition duration-300 ease-in-out">Financial Services</Link>
                  <Link to="#" className="hover:text-gray-200 transition duration-300 ease-in-out">Bootcamp</Link>
                </>
              )}
                
            </div>
           
            <div className="flex items-center flex-row gap-4 ">
            {isScrolled && (
                  <p className="flex items-center gap-1 text-xl text-[#2C7FBF]">Let's Talk <FaLongArrowAltRight /></p>
                )}
              <button onClick={() => setToggleMenu(!toggleMenu)} className="text-xl border rounded-full w-12 h-12 p-3 flex items-center bg-white font-bold">
                <CiMenuFries className="text-black text-5xl font-bold" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className={`fixed lg:w-[25%] top-0 right-0 h-full bg-white p-6 sm:p-8 lg:p-12 w-full sm:w-80 transform transition-transform duration-300 ${toggleMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center text-4xl sm:text-5xl font-bold text-[#2C7FBF]">
              <FaRegPaperPlane className="mr-3" />
              LEJHRO
            </div>
            <button onClick={() => setToggleMenu(false)} className="text-xl border border-black rounded-full w-12 h-12 p-3 flex items-center bg-white font-bold">
              <XMarkIcon className="h-8 text-gray-800" />
            </button>
          </div>
          <hr />
          <div className="flex flex-col gap-6 font-semibold tracking-wider text-gray-800 text-xl pl-4 py-4 sm:text-2xl lg:text-3xl">
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>Innovations</Link>
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>Business Services</Link>
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>Financial Services</Link>
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>Bootcamp</Link>
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>About</Link>
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>Contact Us</Link>
            <Link to="#" className="hover:text-[#2C7FBF] transition duration-300 ease-in-out" onClick={() => setToggleMenu(false)}>Blogs</Link>
            <div className="flex gap-6 mt-6 text-3xl sm:text-4xl lg:text-5xl">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaFacebook size={32} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaLinkedin size={32} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {!isScrolled && (
        <div className={`w-full h-40 bg-cover bg-center flex items-center max-w-7xl mx-auto px-4`}>
          <h2 className="text-white text-5xl font-bold">Blogs</h2>
        </div>
      )}
    </div>
  );
}

export default Navbar;