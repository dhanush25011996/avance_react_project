import React from "react";
import cryptophone from "../assets/cryptophone.png";

function WhatWeDo() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:flex-row-reverse justify-between items-center md:px-16 lg:px-32 py-16">
        <div className="what-we-do-content md:w-1/2">
          <div className="text-center">
            <h2 className="text-green-500 font-semibold">WHAT WE DO</h2>
            <h3 className="text-8xl font-bold mb-4">
              Trade crypto on your terms. Anywhere
            </h3>
            <p className="mb-6 mt-16">
              Invest in bitcoin, Ethereum, USDT and other crptocurrencies using
              our crypto trading app. The Bitcoin and Cryptocurrency markets
              have experienced a surge in volume recently, making it an exciting
              time to become a trader
            </p>
            <div>
              <a
                href="#"
                className="inline-block text-base text-black px-4 py-2 leading-none border rounded border-green-500 hover:border-green-900 hover:text-white hover:bg-black mt-4 lg:mt-0 font-semibold"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={cryptophone}
            alt="cryptophone"
            className="w-96 max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
