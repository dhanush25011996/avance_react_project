import Navbar from "./components/Navbar";
import Header from "./components/Header";
import OfferFeatures from "./components/OfferFeatures";
import WhatWeDo from "./components/WhatWeDo";
import SlideImages from "./components/SlideImages";
import Features from "./components/Features";
import LearnCrypto from "./components/LearnCrypto";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-r from-red-200 to-indigo-200">
      <Navbar />
      <Header />
      <br /> <br /> <br /> <br />
      <OfferFeatures />
      <br /> <br /> <br /> <br />
      <WhatWeDo />
      <br /> <br /> <br /> <br />
      <SlideImages />
      <br /> <br /> <br /> <br />
      <Features />
      <br /> <br /> <br /> <br />
      <LearnCrypto />
      <br /> <br /> <br /> <br />
      <WhyUs />
      <br /> <br /> <br /> <br />
      <Testimonials />
      <br /> <br /> <br /> <br />
      <FAQ />
      <br /> <br /> <br /> <br />
      <Footer />
      </div>
    
  );
}

export default App;
