import React from 'react';
import './sign-in.style.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', pass: '' });
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
                    <label >Password</label>
                    <input type="password" name="pass" value={this.state.pass} onChange={this.handleChange} required />
                    <input type="submit" value="submit form" />
                    <input onClick={signInWithGoogle} type="submit" value="submit google" />
                </form>
            </div>
        )
    }
}
 
export default SignIn;