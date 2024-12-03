import React from 'react'
import AuthForm from '../components/AuthForm'

const Login = ({setEmail, setPassword}) => {
  return (
    <div>
      <AuthForm setEmail={setEmail} setPassword={setPassword} title="Login" buttonText="Log In" toggleLink="/signup" toggleLinkText="SignUp" toggleText="Don't have an account."/>
    </div>
  )
}

export default Login