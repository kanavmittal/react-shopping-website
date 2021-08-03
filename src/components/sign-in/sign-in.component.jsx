import React from 'react';
import './sign-in.style.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pass: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, pass } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, pass);
            this.setState({ email: '', pass: '' });
        } catch (error) {
            console.log(error);
        }

    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="w-15 relative z-2 m-auto px-20">
                <div class="pt-8 sm:w-full sm:max-w-md text-left m-auto lg:m-0">
                    <p class="text-3xl md:text-4xl font-bold mb-3">Log in to your account</p>
                    <div class="lg:pr-28">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label for="email" class="block text-sm font-medium leading-8 text-gray-700">
                                    Email address
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input id="email" value={this.state.email} onChange={this.handleChange} required type="email" placeholder="Email" name="email" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="block text-sm font-medium leading-8 text-gray-700">
                                    Password
                                </label>
                                <div class="mt-1 rounded-md">
                                    <input type="password" placeholder="Password" name="pass" value={this.state.pass} onChange={this.handleChange} required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div class="mt-10">
                                <span class="block w-full rounded-md flex justify-around">
                                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Log in
                                    </button>
                                    <input className="bg-black  py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-tailwind-red focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out" onClick={signInWithGoogle} type="submit" value="Log In with Google" />
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            // <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center login-section">
            //     <div className="pt-8 sm:w-full sm:max-w-md text-left m-auto lg:m-0">
            //         <h1 className="text-3xl md:text-4xl font-bold mb-3">Log in to your account</h1>
            //         <div className="lg:pr-28">
            //             <form onSubmit={this.handleSubmit}>
            //                 <label className="block text-sm font-medium leading-8 text-gray-700">Email</label>
            //                 <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
            //                 <label className="block text-sm font-medium leading-8 text-gray-700">Password</label>
            //                 <input className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" type="password" name="pass" value={this.state.pass} onChange={this.handleChange} required />
            //                 <input className="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-tailwind-blue focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out" type="submit" value="submit form" />
            //                 <input className="w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-tailwind-red focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out" onClick={signInWithGoogle} type="submit" value="submit google" />
            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default SignIn;