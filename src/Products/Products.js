import React, { useState } from 'react';
import "./Product.css";
import { useAtom } from 'jotai';
import { menuAtom } from '../Utils/GuildAtom';
import XrContainer from '../XR/XRContainer';
import { item_id } from '../Utils/Itematom';
import productItems from '../data/ProductItems';

const Products = () => {
  const [selectedItem, setSelectedItem] = useAtom(item_id);
  const [showmenuAtom, setShowMenuAtom] = useAtom(menuAtom);
  const [xr, setXr] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const containerStyle = {
    visibility: showmenuAtom ? 'visible' : 'hidden',
  };

  // Get unique categories from product items
  const categories = [...new Set(productItems.map(item => item.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product) => {
    setSelectedItem(product.id);
    setSelectedProduct(product);
    setXr(true);
  };

  const handleBackClick = () => {
    setSelectedCategory(null); // Reset the selected category
  };

  return (
    <>
      <div className='MainContainer' style={containerStyle}>
        <div className='left-portion overflow-auto gap-1 scrollbar-hidden'>
          {!selectedCategory ? (
            // Show categories if no category is selected
            categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className='glassmorphism-item w-3/5 h-auto flex justify-center border-[0px] items-center text-[20px] text-white py-2  rounded-none bg-gray-800 hover:bg-gray-400 transition-all duration-300'
              >
                {category}
              </button>
            ))
          ) : (
            <>
              {/* Back button */}
              <button
                onClick={handleBackClick}
                className='glassmorphism-item w-auto absolute top-0 left-0 h-auto flex justify-center  items-center text-[14px] text-black  px-2 py-1 m-2 rounded-none  hover:bg-gray-200 hover:text-gray-800 border-[0px] transition-all duration-300'
              >
                Back 
              </button>

              {/* Show products of the selected category */}
              {productItems
                .filter(item => item.category === selectedCategory)
                .map(item => (
                  <div
                    key={item.id}
                    onClick={() => handleProductClick(item)}
                    className='glassmorphism-item item-1 w-3/5 h-auto flex flex-row justify-between align-middle'
                  >
                    <div className='rounded-md py-2 h-fit'>
                      <img className='h-auto rounded-tl-md' src={item.image} alt={item.name} />
                    </div>
                    <div className='flex-grow text-[12px] text-slate-200 rounded-md w-1/2 px-2 p-2 h-auto flex justify-between flex-col bg-black'>
                      <p>{item.name}</p>
                      <p className='text-[12px]'>ETH: {item.price.ETH}</p>
                      <p className='text-[12px]'>₹: {item.price.Rupees}</p>
                      <p className='text-[12px]'>WMC: {item.price.WallmartCoins}</p>
                      <p className='text-[12px]'>Stock: {item.stock} available</p>
                      <p className='text-[12px]'>Rating: {item.ratings} / 5</p>
                      <p className='text-[12px]'>Reviews: {item.reviews} reviews</p>
                    </div>
                  </div>
                ))
              }
            </>
          )}
        </div>

        {/* Pass the selected product information to XrContainer */}
        {xr && <XrContainer modelSrc={selectedProduct.modelSrc} productInfo={selectedProduct} />}
      </div>
    </>
  );
};

export default Products;
