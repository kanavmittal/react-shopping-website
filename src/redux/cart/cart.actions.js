import CartActionTypes from "./cart.types";
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (Item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: Item,
});
