import React from "react";

function Footer() {
  return (
    <div className="text-center bg-blueGray-900 text-whitesmoke">
      <div className="mx-auto flex flex-wrap justify-between py-6 md:py-10">
        <div className="md:w-1/3 w-full mb-4 md:mb-0">
          <h4 className="font-bold text-xl mb-4">Toka</h4>
          <p className="font-medium text-base">
            Reinventing the way of creating websites, we aim to create the most master-peaced WordPress theme available on the market.
          </p>
        </div>

        <div className="md:w-1/3 w-full mb-4 md:mb-0">
          <h6 className="font-semibold mb-2 text-base">CONTACT US</h6>
          <p className="text-base mb-2">202 Helga Springs Rd, Crawford, TN 38554</p>
          <p className="font-semibold text-base mb-2 cursor-pointer hover:text-cyan-500 transition-colors">Call Us: 800.275.8777</p>
          <p className="text-base mb-2 cursor-pointer hover:text-cyan-500 transition-colors">alex@company.com</p>
        </div>

        <div className="md:w-1/3 w-full mb-4 md:mb-0">
          <h6 className="font-semibold mb-2 text-base">SIGN UP FOR EMAIL UPDATES</h6>
          <div className="flex items-center">
            <input type="email" className="bg-blueGray-800 py-2 px-4 rounded-l-full w-full" placeholder="Enter your email" />
            <button className="bg-emerald-500 text-whitesmoke py-2 px-4 rounded-r-full hover:bg-emerald-600 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-wrap justify-between py-4 md:py-6">
        <div className="md:w-1/3 w-full md:text-left text-center mb-4 md:mb-0">
          <p className="text-sm md:text-base">&copy; 2023 Toka. All rights reserved.</p>
        </div>

        <div className="md:w-1/3 w-full text-center">
          <ul className="text-xs md:text-sm flex flex-col md:flex-row justify-center md:justify-end">
            <li className="mb-2 md:mb-0 md:mr-6"><a href="#">Home</a></li>
            <li className="mb-2 md:mb-0 md:mr-6"><a href="#">About Us</a></li>
            <li className="mb-2 md:mb-0 md:mr-6"><a href="#">Our Team</a></li>
            <li className="mb-2 md:mb-0 md:mr-6"><a href="#">Shop</a></li>
            <li className="mb-2 md:mb-0 md:mr-6"><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
