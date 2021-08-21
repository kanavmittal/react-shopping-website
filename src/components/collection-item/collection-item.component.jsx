import React from "react";
import "./collection-item.style.scss";
import { connect } from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";
const CollectionItem = ({ item, addItem }) => {
    const { id, name, price, imageUrl } = item;
    return (
        <div className="flex flex-col w-full items-center border-2 py-5 px-0 pb-15 rounded-3xl border-gray-100 ">
            <div
                className="h-72 w-60 bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="my-4">
                <span className="name text-2xl">{name}</span>
            </div>
            <div className="flex flex-row justify-between w-60">
                <div className="flex flex-col">
                    <span className="text-gray-400">Price</span>
                    <span className="tracking-wider font-bold">${price}</span>
                </div>
                <button onClick={() => addItem(item)} className="font-medium border-2 py-2 px-4 rounded-xl hover:bg-black hover:text-white">Add To Cart</button>
            </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);
