import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            'displayName': '',
            'email': '',
            'password': '',
            'confirmPassword': '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password != confirmPassword) {
            alert("password don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                'displayName': '',
                'email': '',
                'password': '',
                'confirmPassword': '',
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="sigh-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="displayName" onChange={this.handleChange} required />
                    <input type="email" name="email" onChange={this.handleChange} required />
                    <input type="password" name="password" onChange={this.handleChange} required />
                    <input type="password" name="confirmPassword" onChange={this.handleChange} required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp;