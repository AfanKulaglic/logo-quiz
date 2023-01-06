import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue, update } from 'firebase/database'
import { Button } from 'react-bootstrap'
import '../../Styles/MultiplayerLobby.css'

export const FriendRequest = () => {
    const {state} = useLocation()
    const navigate = useNavigate()

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

    const toWaitingRoom = (call) => {
        navigate('/multiplayerRoom', {
            state: {
                email:state.email,
                level:1,
                corrAns:0,
                friend:call
            }
        })
    }


    const DeleteCall = (items) => {
      update(ref(db,`/${items.uuid}`), {
          call:'',
          uuid: items.uuid
      })
    }

  return (
    <div className='friend-request' style={{display:'flex'}}>
        {items.filter(items => (items.email === state.email && items.call !== '')).map(items =>
            <>
                <p>{items.call}</p>
                <div style={{marginLeft:'auto'}}>
                    <Button className='friend-request-btn' onClick={() => toWaitingRoom(items.call)}>Play</Button>
                    <Button variant='danger' className='friend-request-btn' onClick={() => DeleteCall(items)}>Close</Button>
                </div>
            </>
        )}
    </div>
  )
}
