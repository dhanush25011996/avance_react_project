import React from 'react';
import TestimonialsImage from '../assets/Crypto-Coin-and-Wallet-3D-Icon-1-1024x993.png';
import User1Image from '../assets/100-testimonial.png';
import User2Image from '../assets/98-testimonial.png';
import User3Image from '../assets/45-testimonial.png';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-header flex flex-col items-center justify-center md:flex-row md:justify-between">
        <img
          className="mx-5 w-1/2 md:w-1/3"
          src={TestimonialsImage}
          alt="Testimonials Image"
        />
        <div className="testimonials-title text-center">
          <h2 className="text-2xl md:text-xl font-semibold text-green-500 mb-4">
            TESTIMONIALS
          </h2>
          <h1 className="text-4xl md:text-8xl font-bold mb-4">Millions of users around the world</h1>
          <p className="mb-6 mt-8 md:mt-16">It's an exciting time to become a trader</p>
          <br />
          <a
            href="#"
            className="inline-block text-base text-black px-4 py-2 leading-none border rounded border-green-500 hover:border-green-900 hover:text-white hover:bg-black mt-4 lg:mt-0 font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="flex flex-col items-center">
          <img src={User1Image} alt="User 1" className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4" />
          <h3 className="text-lg md:text-2xl font-bold mb-2">Adam Watson</h3>
          <p className="text-gray-500 mb-2">Barista</p>
          <p className="text-center">"Great! This is one of the best apps I have ever used before."</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={User2Image} alt="User 2" className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4" />
          <h3 className="text-lg md:text-2xl font-bold mb-2">Lisa Smith</h3>
          <p className="text-gray-500 mb-2">Designer</p>
          <p className="text-center">"Great! This is one of the best apps I have ever used before."</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={User3Image} alt="User 3" className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4" />
          <h3 className="text-lg md:text-2xl font-bold mb-2">Nick Green</h3>
          <p className="text-gray-500 mb-2">Developer</p>
          <p className="text-center">"Great! This is one of the best apps I have ever used before."</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;