import React from 'react'
import AuthForm from '../components/AuthForm'

const SignUp = ({setEmail,setPassword,setName}) => {
  return (
    <div>
      <AuthForm setName={setName} setEmail={setEmail} setPassword={setPassword} title="Create a new Account" buttonText="Sign Up" toggleLink="/login" toggleLinkText="Log in" toggleText="Already have an account ?"/>
    </div>
  )
}

export default SignUp