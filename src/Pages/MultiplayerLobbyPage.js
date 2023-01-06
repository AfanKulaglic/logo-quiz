import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavigationC } from '../Components/NavigationC'
import { MultiplayerDetail } from '../Components/MultiplayerLobby/MultiplayerDetail'
import { FriendRequest } from '../Components/MultiplayerLobby/FriendRequest'

export const MultiplayerLobbyPage = () => {
    const {state} = useLocation()

  return (
    <div>
        <NavigationC />
        <MultiplayerDetail />
    </div>
  )
}
