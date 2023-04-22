    import React from 'react';
    import lockcrypto from '../assets/lock-crypto.png';
    import walletcrypto from '../assets/wallet-crypto-icon.png';
    import earningtrading from '../assets/earning-trading.png';
    import './OfferFeatures.css';

    function OfferFeature({ image, title, description }) {
    return (
        <div className="offer-feature">
        <div className="offer-feature-image">
            <img src={image} alt="feature image" style={{ width: '80px', height: '80px' }} />
        </div>
        <div className="offer-feature-text">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
        </div>
    );
    }

    function OfferFeatures() {
    return (
        <div className="p-8 rounded-lg flex flex-col md:flex-row justify-center items-center md:justify-between md:px-16 lg:px-32 py-16">
        <OfferFeature
            image={lockcrypto}
            title="Register"
            description="Download our app and register in 3 minutes"
        />
        <OfferFeature
            image={walletcrypto}
            title="Connect Your Wallet"
            description="Download our app and register in 3 minutes"
        />
        <OfferFeature
            image={earningtrading}
            title="Start Trading"
            description="Download our app and register in 3 minutes"
        />
        </div>
    );
    }

    export default OfferFeatures;
