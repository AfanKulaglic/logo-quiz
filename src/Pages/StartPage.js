import React from 'react'
import '../Styles/Start.css'
import { StartCtx } from '../Components/StartPage/StartCtx'
import logo from '../Imgs/logo.png'
import { NavigationC } from '../Components/NavigationC'
import { FriendRequest } from '../Components/MultiplayerLobby/FriendRequest'

const StartLogo = () => {
  return (
    <div className='start-logo'>
      <img src={logo} height='100vh' alt='logo' />
      <h2>Multiplayer soccer quiz</h2>
    </div>
  )
}

export const StartPage = () => {
  return (
    <div className="start-page">
        <NavigationC />
        <FriendRequest />
        <StartLogo />
        <StartCtx />
    </div>
  )
}
