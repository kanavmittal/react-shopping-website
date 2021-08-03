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
        if (password !== confirmPassword) {
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
            
                <div className="w-15 relative z-2 m-auto px-20">
                <div className="pt-8 sm:w-full sm:max-w-md text-left m-auto lg:m-0">
                    <p className="text-3xl  md:text-4xl font-bold mb-3">I don't have an account</p>
                    <div className="lg:pr-38">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-8 text-gray-500">
                                    Username
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input type="text" name="displayName" onChange={this.handleChange} required placeholder="Name" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-8 text-gray-500">
                                    Email Address
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input type="email" name="email" onChange={this.handleChange} required placeholder="Email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="block text-sm font-medium leading-8 text-gray-500">
                                    Password
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input type="password" placeholder="Password" name="password" onChange={this.handleChange} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="block text-sm font-medium leading-8 text-gray-500">
                                    Confirm Password
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input type="password" placeholder="Confirm Password" name="confirmPassword" onChange={this.handleChange} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div class="mt-10">
                                <span class="block w-full rounded-md flex justify-around">
                                    <button type="submit" class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-12 rounded">
                                        Log in
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            // <div className="sigh-up">
            //     <h2 className="title">I do not have a account</h2>
            //     <span>Sign up with your email and password</span>
            //     <form action="" onSubmit={this.handleSubmit}>
            //         <input type="text" name="displayName" onChange={this.handleChange} required />
            //         <input type="email" name="email" onChange={this.handleChange} required />
            //         <input type="password" name="password" onChange={this.handleChange} required />
            //         <input type="password" name="confirmPassword" onChange={this.handleChange} required />
            //         <button type="submit">Sign Up</button>
            //     </form>
            // </div>
        )
    }
}

export default SignUp;