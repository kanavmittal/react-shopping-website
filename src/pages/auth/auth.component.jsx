import React from 'react';
import './auth.style.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.comonent';


const Auth = () => (
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default Auth;