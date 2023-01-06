import { Button } from 'react-bootstrap'
import React from 'react'
import '../../Styles/Start.css'
import { useLocation, useNavigate } from 'react-router-dom'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';

export const StartCtx = () => {
  const navigate = useNavigate()

  const {state} = useLocation()

  const toGame = () => {
    navigate('/game', {
      state: {
          email:state.email,
          corrAns:0,
          level:state.level
        }
    })
  }

  const toMultiplayer = () => {
    navigate('/multiplayerLobby', {
      state: {
          email:state.email,
          corrAns:0,
          level:state.level
        }
    })
  }

  return (
    <div className='start-ctx'>
        <Button onClick={() => toMultiplayer()} className='start-button'>Multiplayer <PeopleIcon className='start-btn-icon' /></Button>
        <Button onClick={() => toGame()} className='start-button'>Play<FitnessCenterIcon className='start-btn-icon' /></Button>
        <Button className='start-button'>Settings <SettingsIcon className='start-btn-icon' /></Button>
    </div>
  )
}
