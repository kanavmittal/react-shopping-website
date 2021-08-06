import React from 'react';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../../redux/cart/cart.actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const CartIcon = ({ toggleCartHidden }) => (
    <div className="h-11 w-16 relative flex items-center cursor-pointer justify-center" onClick={toggleCartHidden}>
        <FontAwesomeIcon icon="shopping-bag" size="2x" />
        <span className="absolute text-xs font-bold pt-3 text-white">0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);