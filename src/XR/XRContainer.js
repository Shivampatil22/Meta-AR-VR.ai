import { useState } from 'react';
import { ARButton, XR } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';
import XrCube from './XrCube';
import "./Xr.css";

export default function XrContainer(props) {
    const [showDetails, setShowDetails] = useState(false);

    // Function to toggle between showing the Canvas and the details popup
    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    // Function to render the stars based on rating
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400">★</span>);
            }
        }
        return stars;
    };

    return (
        <>
            <div className="container2">
                <Canvas style={{ width: '600px', height: '500px' }}>
                    {!showDetails ? (
                        <XR>
                            <XrCube url={props.modelSrc} />
                        </XR>
                    ) : null}
                </Canvas>
                {!showDetails ? (
                    <div className="Productinfo mt-2">
                        <button
                            onClick={() => alert('ENTER AR')}
                            className="px-4 py-2 bg-blue-800 text-white rounded-md transition-all duration-300 hover:bg-blue-600"
                        >
                            Enter AR
                        </button>
                        <button
                            onClick={toggleDetails}
                            className="ml-2 px-4 py-2 bg-gray-800 text-white rounded-md transition-all duration-300 hover:bg-gray-900"
                        >
                            Details
                        </button>
                    </div>
                ) : null}
            </div>

            {showDetails && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 fade-in">
                    <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-lg shadow-lg max-w-xs w-full transition-opacity duration-300">
                        <button
                            onClick={toggleDetails}
                            className="absolute top-2 right-2 border-none text-white hover:text-gray-400 text-sm"
                        >
                            &times;
                        </button>
                        <h2 className="text-lg font-semibold mb-2 text-gray-100">{props.productInfo.name}</h2>
                        <p className="mb-2 text-sm text-gray-200">{props.productInfo.description}</p>
                        <div className="mb-2 text-sm text-gray-200 flex items-center">
                            <span className="mr-1">Rating:</span> {renderStars(props.productInfo.ratings)}
                        </div>
                        <div className="mt-4 text-[15px] text-gray-300">
                            <p className="mb-1  text-[15px]">
                                <span className="font-semibold text-[15px]">Stock:</span> {props.productInfo.stock} available
                            </p>
                            <p className="mb-1  text-[15px]">
                                <span className="font-semibold text-[15px]">Price in ETH:</span> {props.productInfo.price.ETH}
                            </p>
                            <p className="mb-1  text-[15px]">
                                <span className="font-semibold text-[15px]">Price in ₹:</span> {props.productInfo.price.Rupees}
                            </p>
                            <p className="mb-1  text-[15px]">
                                <span className="font-semibold text-[15px]">Price in WallmartCoins:</span> {props.productInfo.price.WallmartCoins}
                            </p>
                        </div>


                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => alert('Buy with ETH clicked!')}
                                className="px-3 py-1 text-[15px] text-white rounded-sm transition-all border border-white duration-300 flex flex-col items-center"
                            >
                                <span>Buy</span>
                                <span className="text-[12px] text-gray-300">ETH</span>
                            </button>
                            <button
                                onClick={() => alert('Buy with ₹ clicked!')}
                                className="px-3 py-1 text-[15px] text-white rounded-sm transition-all  border border-white duration-300 flex flex-col items-center"
                            >
                                <span>Buy</span>
                                <span className="text-[12px] text-gray-300">₹</span>
                            </button>
                            <button
                                onClick={() => alert('Buy with WallmartCoins clicked!')}
                                className="px-3 py-1 text-[15px] text-white rounded-sm transition-all border border-white duration-300 flex flex-col items-center"
                            >
                                <span>Buy</span>
                                <span className="text-[12px] text-gray-300">WMC</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
