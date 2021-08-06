import React from 'react';
import { connect } from 'react-redux';
import './header.style.scss';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from './cartIcon/cartIcon.component'
import CartDropdown from '../cartDropdown/cartDropdown.component';
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img className="logo" src={logo} alt="" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div> :
                    <div>
                        <Link className="option" to="/signin">
                            Sign In
                        </Link>
                    </div>
            }
            <CartIcon></CartIcon>
        </div>
        {
            hidden ? null : <CartDropdown></CartDropdown>
        }
    </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header);
