import React from 'react';
import WhyUsImage from '../assets/opwejf.png';

const WhyUs = () => {
  return (
    <div>
      <div className="mx-10 mb-10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-xl md:text-2xl font-semibold text-green-500 mb-4">
            Why Us
          </h2>
          <h1 className="text-4xl md:text-8xl font-bold mb-4">
            We got everything you need to start trading
          </h1>
          <p className="mb-6 mt-8 md:mt-16">
            The Bitcoin and cryptocurrency markets have experienced a surge in
            volume recently, making it an exciting time to become a trader
          </p>
          <ul className="list-none text-blue-800 mt-4 ml-6">
            <li>Top trading platform</li>
            <li>Secure payments</li>
            <li>Easy to start</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <img src={WhyUsImage} alt="Why Us Image" className="w-full"/>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
