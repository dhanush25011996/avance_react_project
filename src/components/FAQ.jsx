import React from "react";

const FAQ = () => {
  return (
    <div className="text-center my-8 sm:my-24">
      <h2 className="text-lg sm:text-xl font-semibold text-green-500 mb-2 sm:mb-4">FAQ</h2>
      <h1 className="text-3xl sm:text-8xl font-bold mb-2 sm:mb-4">Still have questions?</h1>
      <p className="mb-4 sm:mb-6 mt-6 sm:mt-16">
        Cryptocurrency markets have seen an increase in volume in recent weeks,
        which is great opportunity for new traders
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 sm:my-8 mb-6 sm:mb-0 mt-6 sm:mt-16">
        <div>
          <h4 className="text-lg sm:text-xl font-bold mb-2">
            What is blockchain technology?
          </h4>
          <h4 className="text-lg sm:text-xl font-bold mb-2 my-6 sm:my-12">What is bitcoin?</h4>
          <h4 className="text-lg sm:text-xl font-bold mb-2 my-6 sm:my-12">Who created bitcoin?</h4>
        </div>
        <div>
          <h4 className="text-lg sm:text-xl font-bold mb-2">What is cryptocurrency?</h4>
          <h4 className="text-lg sm:text-xl font-bold mb-2 my-6 sm:my-12">
            How does cryptocurrency wallet work?
          </h4>
          <h4 className="text-lg sm:text-xl font-bold mb-2 my-6 sm:my-12">
            How to create a cryptocurrency wallet?
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
