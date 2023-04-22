import React from 'react';
import DownloadAppImage from '../assets/app03r34.png';
import CryptoMiningImage from '../assets/cryptomining-hit.png';
import CryptoWalletImage from '../assets/crypto-wallet-hit.png';
import CryptoTradingImage from '../assets/crypto-trading-hit.png';
import './Features.css';

function Features() {
  return (
    <div>
      <div className="text-center">
        <h2 className='font-semibold text-green-500'>FEATURES</h2>
        <h3 className="text-8xl font-bold mb-4">How it Works</h3>
        <p className="mx-auto max-w-lg">
          Cryptocurrency markets have seen an increase in volume in recent
          weeks, which is a great opportunity for new traders.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 rounded-lg p-4 mt-8">
        <div className="feature-box flex flex-col items-center justify-center mx-auto my-6">
          <img src={DownloadAppImage} alt="Feature 1"/>
          <h2 className="mt-4 font-bold text-lg text-center">Download App</h2>
          <p className="mt-2 text-gray-600 text-center">Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app</p>
        </div>
        <div className="feature-box flex flex-col items-center justify-center mx-auto my-6">
          <img src={CryptoMiningImage} alt="Feature 2" />
          <h2 className="mt-4 font-bold text-lg text-center">Register</h2>
          <p className="mt-2 text-gray-600 text-center">Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app</p>
        </div>
        <div className="feature-box flex flex-col items-center justify-center mx-auto my-6">
          <img src={CryptoWalletImage} alt="Feature 3" />
          <h2 className="mt-4 font-bold text-lg text-center">Connect Wallet</h2>
          <p className="mt-2 text-gray-600 text-center">Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app</p>
        </div>
        <div className="feature-box flex flex-col items-center justify-center mx-auto my-6">
          <img src={CryptoTradingImage} alt="Feature 4" />
          <h2 className="mt-4 font-bold text-lg text-center">Start Trading</h2>
          <p className="mt-2 text-gray-600 text-center">Trade Bitcoin, Ethereum, USDT and other altcoins using our crypto trading app</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
