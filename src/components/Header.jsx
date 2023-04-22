import React from "react";
import cryptoBgImg from "../assets/crypto-bg-img.png";
import "./Header.css";

function Header() {
  return (
    <div className="flex flex-col justify-center items-center p-8 md:flex-row">
      <div className="text-center md:text-left md:w-2/3 md:pr-16">
        <h2 className="text-xl font-semibold text-green-500 mb-4">
          Get 25% off now
        </h2>
        <h1 className="text-8xl font-bold mb-4">Buy & Sell crypto easily</h1>
        <p className="mb-6 mt-16">
          Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto
          trading app.
        </p>
        <div>
          <a
            href="#"
            className="inline-block text-base text-black px-4 py-2 leading-none border rounded border-green-500 hover:border-green-900 hover:text-white hover:bg-black mt-4 lg:mt-0 font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={cryptoBgImg} alt="Crypto Background" className="animated" />
      </div>
    </div>
  );
}

export default Header;
