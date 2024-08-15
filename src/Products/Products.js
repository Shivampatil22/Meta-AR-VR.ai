import React, { useState } from 'react';
import "./Product.css";
import { useAtom } from 'jotai';
import { menuAtom } from '../Utils/GuildAtom';
import XrContainer from '../XR/XRContainer';
import { item_id } from '../Utils/Itematom';
import productItems from '../data/ProductItems'; // Assuming you've placed your product data in a separate file named ProductItems.js

const Products = () => {
  const [selectedItem, setSelectedItem] = useAtom(item_id);
  const [showmenuAtom, setShowMenuAtom] = useAtom(menuAtom);
  const [xr, setXr] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const containerStyle = {
    visibility: showmenuAtom ? 'visible' : 'hidden',
  };

  const OnClick = (product) => {
    console.log(product.id);
    setSelectedItem(product.id);
    setSelectedProduct(product);
    setXr(true);
  };

  return (
    <>
      <div className='MainContainer' style={containerStyle}>
        <div className='left-portion overflow-auto gap-3 scrollbar-hidden'>
          {productItems.map((item) => (
            <div
              key={item.id}
              onClick={() => OnClick(item)}
              className=' glassmorphism-item item-1 w-3/5 h-auto flex flex-row justify-between align-middle'
            >
              <div className='rounded-md py-2 h-fit'>
                <img className='h-auto rounded-tl-md' src={item.image} alt={item.name} />
              </div>
              <div className=' flex-grow text-[12px]  text-slate-200 rounded-md w-1/2  px-2 p-2 h-auto  flex justify-between flex-col bg-black'>
                <p>{item.name}</p>
                {item.category}
                <p className='text-[12px]'>ETH: {item.price.ETH}</p>
                <p className='text-[12px]'>₹: {item.price.Rupees}</p>
                <p className='text-[12px]'>WMC: {item.price.WallmartCoins}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pass the selected product information to XrContainer */}
        {xr && <XrContainer modelSrc={selectedProduct.modelSrc} productInfo={selectedProduct} />}
      </div>
    </>
  );
};

export default Products;
