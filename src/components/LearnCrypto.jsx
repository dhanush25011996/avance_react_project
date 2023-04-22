import React from 'react';

function LearnCrypto() {
return (
<div className="flex flex-col justify-center items-center py-10 md:py-20">
<div className="max-w-3xl text-center mb-10">
<h2 className="text-xl font-semibold text-green-500 mb-4">
         LEARN CRYPTO
        </h2>
<h1 className="text-8xl font-bold mb-4">
Watch our crypto trading guide for beginners
</h1>
<p className="mb-6 mt-16">
The Bitcoin and cryptocurrency markets have experienced a surge in
volume recently, making it an exciting time to become a trader
</p>
<a href="#" className="text-lg font-bold text-green-900">
View all guides
</a>
</div>
<div className="w-full max-w-3xl h-96">
<video
       width="100%"
       height="100%"
       controls
       src=""
       title="Learn Crypto Video"
       className="object-cover rounded-lg"
     ></video>
</div>
</div>
);
}

export default LearnCrypto;