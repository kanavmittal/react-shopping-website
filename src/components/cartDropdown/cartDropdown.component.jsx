import React from "react";
import { connect } from "react-redux";
import CartItem from "../cartItem/cartItem.component";
const CartDropdown = ({ cartItems }) => (
  <div className="absolute w-80 md:w-96 h-96 md:h-3/5 flex flex-col p-4 bg-white z-20 top-20 right-4 border-2 border-gray-100 shadow-2xl rounded-sm">
    <div className="w-full h-5/6 flex flex-col overflow-y-scroll">
    {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}></CartItem>))
    }
    </div>
    <button className="py-3 px-6 text-white rounded-lg bg-black shadow-lg block md:inline-block mt-auto ">
      Go To Checkout
    </button>
  </div>
);
const mapStateToProps =({cart : {cartItems}}) => (
    {
        cartItems
    } 
)
export default connect(mapStateToProps)(CartDropdown);
