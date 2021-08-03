import React from 'react';
import './auth.style.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.comonent';


const Auth = () => (
    <div className="flex flex-wrap">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default Auth;