import React from 'react';
import './header.style.scss';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import { auth } from '../../firebase/firebase.utils';
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: props.currentUser,
            logo
        }
    }
    render() {
        return (

            <div className="header">
                <Link className="logo-container" to="/">
                    <img className="logo" src={this.state.logo} alt="" />
                </Link>
                <div className="options">
                    <Link className="option" to="/shop">
                        Shop
                </Link>
                    <Link className="option" to="/shop">
                        Contact
                </Link>
                    <div>{this.state.currentUser}</div>
                    {
                        this.props.currentUser ?
                            <div className="option" onClick={() => auth.signOut()}>
                                Sign Out
                    </div> :
                            <div>
                                <Link className="option" to="/signin">
                                    Sign In
                </Link>
                            </div>
                    }
                </div>

            </div>

        )
    }
}
export default Header;
