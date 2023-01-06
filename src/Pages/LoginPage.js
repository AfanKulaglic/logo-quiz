import React from 'react'
import { NavigationC } from '../Components/NavigationC'
import logo from '../Imgs/logo.png'
import { LoginCtx } from '../Components/LoginPage/LoginCtx'
import '../Styles/Start.css'

const StartLogo = () => {
  return (
    <div className='start-logo'>
      <img src={logo} height='100vh' alt='logo'/>
      <h2>Multiplayer soccer quiz</h2>
    </div>
  )
}

export const LoginPage = () => {
  return (
    <div>
      <StartLogo />
      <LoginCtx />
    </div>
  )
}
