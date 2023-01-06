import React, { useEffect, useState } from 'react'
import '../../Styles/EndGame.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue, update } from 'firebase/database'
import { Button } from 'react-bootstrap'


export const EndGameCtx = () => {
  const {state} = useLocation()
  const [items,setItems] = useState([])
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

  const SaveDb = ({items}) => {
    update(ref(db,`/${items.uuid}`), {
        score: state.corrAns,
        callReq:false,
        call:'',
        uuid:items.uuid        
    })
  }

  const AccountScore = () => {
    return (
      <>
      {items.filter(items => (items.email === state.email)).map(items =>
        <>
          <h2>Rezultat</h2>
          <SaveDb items={items}/>
          <p>{state.corrAns}</p>
          <p>{items.clock} s</p>
        </>
      )}
      </>
    )
  }

  const FriendScore = () => {
    return (
      <>
      {items.filter(items => (items.email === state.friend)).map(items =>
        <>
          <h2>Rezultat</h2>
          <p>{items.score}</p>
          <p>{items.clock} s</p>
        </>
      )}
      </>
    )
  }

  const toStart = () => {
    navigate('/start', {
      state: {
          email:state.email,
          level:1
      }
    })
  }
  return (
    <div>
        {state.email}
        <AccountScore />
        {state.friend}
        {state.friend && <FriendScore />}
        <Button onClick={() => toStart()}>Vrati na pocetak</Button>
    </div>
  )
}
