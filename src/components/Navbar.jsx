import React, { useState } from 'react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-24">
        <span className="font-sans text-3xl font-bold tracking-tight">Crypto</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-gray-900 hover:border-gray-900" onClick={() => setShowMenu(!showMenu)}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className={`${showMenu ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-base lg:flex-grow ml-auto">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            NFT
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            Crypto
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            About Us
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            Our Team
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            Contact Us
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            Online Shop
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 mr-10 text-gray-700 hover:text-gray-900 font-semibold">
            Blog
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-base px-4 py-2 leading-none border rounded border-green-500 hover:border-green-900 hover:text-white hover:bg-black mt-4 lg:mt-0 font-semibold">Buy Now</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
