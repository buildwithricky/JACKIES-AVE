import React from 'react'
import SignIn from '../signin/SignIn'
import SignUp from '../sign-up-component/Signup'
import "./sign.scss"
const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
           <SignIn/>
           <SignUp/>
        </div>
    )
}

export default SignInAndSignUpPage
