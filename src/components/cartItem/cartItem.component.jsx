import React from 'react';
const CartItem=({ item : {imageUrl, price, name ,quantity}})=>{
    return (
        <div className="flex py-2">
            <div className="w-16 h-20">
                <img src={imageUrl} alt="" srcset="" />
            </div>
            <div className="w-2/3 flex flex-col justify-between">
                <div className=" py-2 px-2 font-semibold text-gray-600">{name}</div>
                <div className=" py-2 px-2 font-bold text-gray-800">${price}</div>
            </div>
            <div className="h-full flex justify-center items-center">
                <div className="rounded-lg font-bold text-gray-500 text-lg h-6 w-6 text-center">{quantity}</div>
            </div>
        </div>
    )
}
export default CartItem;