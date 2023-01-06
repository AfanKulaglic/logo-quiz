import React, { useEffect, useState } from 'react'
import { db } from '../../firebase.js'
import { uid } from 'uid'
import  { set, ref, onValue } from 'firebase/database'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../Styles/MultiplayerLobby.css'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { Button } from 'react-bootstrap'
import { CallFriend } from './CallFriend.js'

export const FriendsAccounts = () => {
    const [items,setItems] = useState([])
    const {state} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        onValue(ref(db), snapshot => {
          setItems([])
          const data = snapshot.val()
          if(data !== null) {
            Object.values(data).map((todo) => {
              setItems(oldArray => [...oldArray,todo])
            })
          }
        })
    },[])

    console.log(state)

  return (
    <div className='friends-accounts'>
        {items.filter(items => (items.ctg === 'accounts' && items.email !== state.email)).map(items =>
            <div className='friend-account'>
                <p>{items.name}</p>
                <Button className='friends-accounts-icon' onClick={() => CallFriend(state.email,items,navigate,state)} variant='success'><PhoneCallbackIcon style={{fontSize:'5vh'}} /></Button>
            </div>
        )}
    </div>
  )
}
