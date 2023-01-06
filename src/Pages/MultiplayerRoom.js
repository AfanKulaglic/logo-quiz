import React from 'react'
import { NavigationC } from '../Components/NavigationC'
import { MultiplayerDetail } from '../Components/MultiplayerLobby/MultiplayerDetail'
import { WaitingRoom } from '../Components/MultiplayerLobby/WaitingRoom'

export const MultiplayerRoom = () => {
  return (
    <div>
        <NavigationC />
        <WaitingRoom />
    </div>
  )
}
