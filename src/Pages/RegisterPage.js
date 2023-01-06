import React from 'react'
import { NavigationC } from '../Components/NavigationC'
import logo from '../Imgs/logo.png'
import '../Styles/Register.css'
import { LoginCtx } from '../Components/LoginPage/LoginCtx'
import { RegisterCtx } from '../Components/RegisterPage/RegisterCtx'

const StartLogo = () => {
  return (
      <div className='start-logo'>
        <img src={logo} height='100vh' alt='logo'/>
        <h2>Multiplayer soccer quiz</h2>
      </div>
  )
}

export const RegisterPage = () => {
  return (
    <div>
      <StartLogo />
      <RegisterCtx />
    </div>
  )
}
