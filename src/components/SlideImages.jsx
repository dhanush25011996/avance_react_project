import { useState, useEffect } from 'react';
import logo1 from '../assets/logo-1-crypto-300x83.png';
import logo2 from '../assets/logo-23-crypto-6-300x74.png';
import logo3 from '../assets/logo-crypto-2-300x94.png';
import logo4 from '../assets/logo-crypto-3-300x74.png';
import logo5 from '../assets/logo-crypto-4-300x51.png';
import logo6 from '../assets/logo-crypto-5-300x69.png';

const SlideImages = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 6);
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className={`mx-4 my-4 md:mx-8 ${
            slideIndex === index ? 'opacity-100' : 'opacity-20'
          }`}
          style={{ width: '120px', height: 'auto' }}
        />
      ))}
    </div>
  );
};

export default SlideImages;
