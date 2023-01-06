import React from 'react'
import '../App.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useLocation, useNavigate } from 'react-router-dom'
import { CoinSys } from './CoinSys';
import { AccountsSys } from './AccountsSys';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from 'react-bootstrap';

export const NavigationC = () => {
  const navigate = useNavigate()
  const {state} = useLocation()

  const toStart = () => {
    navigate('/start', {
      state: {
          email:state.email,
          corrAns:0,
          level:1
        }
    })
  }

  return (
    <div className='navigation'>
        <div className='navigation-account'>
          <div className='navigation-btn'>
            <HomeIcon onClick={() => toStart()} style={{fontSize:'40px'}} />
          </div>
          <div className='navigation-btn'>
            <AccountBoxIcon style={{fontSize:'40px'}} />
          </div>
          <AccountsSys />
        </div>
        <div className='navigation-coins'>
          <CoinSys />
          <div className='navigation-btn'>
            <AttachMoneyIcon className='navigation-btn' style={{fontSize:'40px',marginLeft:'auto',color:'gold'}} />
          </div>
        </div>
    </div>
  )
}
