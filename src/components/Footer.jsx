import React from "react";

function Footer() {
  return (
    <div className="text-center">
      <div className="mx-auto flex flex-wrap md:flex-nowrap justify-between py-4 md:py-12">
        <div className="md:w-2/5 sm:w-full mb-4 md:mb-0">
          <h4 className="font-bold text-xl mb-2">Toka</h4>
          <p className="font-medium text-base md:pr-24 pl-4">
            Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.
          </p>
        </div>

        <div className="md:w-3/10 sm:w-1/2 mb-4 md:mb-0">
          <h6 className="font-semibold mb-2 text-sm">CONTACT US</h6>
          <p className="text-base mb-2">202 Helga Springs Rd, Crawford, TN 38554</p>
          <p className="font-semibold text-base mb-2 cursor-pointer hover:text-cyan-500 transition-colors">Call Us: 800.275.8777</p>
          <p className="text-base mb-2 cursor-pointer hover:text-cyan-500 transition-colors">alex@company.com</p>
        </div>

        <div className="md:w-3/10 sm:w-1/2 mb-4 md:mb-0">
          <h6 className="font-semibold mb-2 text-sm">SIGN UP FOR EMAIL UPDATES</h6>
          <div className="flex items-center mb-2">
            <input type="email" className="bg-blueGray-800 py-2 px-4 rounded-full w-full" />
            <button className="bg-emerald-500 text-white py-2 px-4 rounded-full ml-2 hover:bg-emerald-600">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between py-4">
        <div className="md:w-1/3 sm:w-full md:text-left text-center mb-4 md:mb-0">
          <p className="text-whitesmoke font-medium text-sm sm:text-base md:pl-20 pt-4">Copyright ©2022 Toka.
            All rights reserved.</p>
        </div>

        <div className="md:w-1/3 sm:w-1/2 lg:w-1/4 text-center md:text-right">
          <ul className="text-xs sm:text-sm flex flex-col md:flex-row justify-between md:mr-12">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
