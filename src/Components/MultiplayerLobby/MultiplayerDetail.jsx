import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../Styles/MultiplayerLobby.css'
import { Button, Form } from 'react-bootstrap'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { FriendsAccounts } from './FriendsAccounts';
import { FriendRequest } from './FriendRequest';
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue } from 'firebase/database'

export const MultiplayerDetail = () => {
    const {state} = useLocation()
    const [isCall,setIsCall] = useState(false)
    const [items,setItems] = useState([])

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

  return (
    <>
    <FriendRequest />
    <div className='multiplayer-detail'>  
        <h2>invite a friend to play</h2>
        <div className='multiplayer-detail-div'>
            <Form.Control className='multiplayer-input' type="email" placeholder="Search name"/>
            <Button>
                <PersonSearchIcon className='multiplayer-search-icon' style={{fontSize:'4vh'}} />
            </Button>
        </div>
        <hr/>
        <FriendsAccounts />
    </div>
    </>
  )
}
