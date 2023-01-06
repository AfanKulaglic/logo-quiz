import React, { useEffect, useState } from 'react'
import '../../Styles/Game.css'
import { useLocation } from 'react-router-dom'
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue,update } from 'firebase/database'

export const GameData = ({level}) => {
  const [items,setItems] = useState([])
  const {state} = useLocation()
  const [clock,setClock] = useState(0)

  setTimeout(() => {
    setClock(clock+1)
    UpdateData()
  }, 1000)

  const SaveClock = (items) => {
    update(ref(db,`/${items.uuid}`), {
        clock,
        uuid: items.uuid
    })
  } 

  const UpdateData = () => {
      {items.filter(items => (items.email === state.email)).map(items =>{
        SaveClock(items)
      })}
    }

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

  const FriendData = () => {
    return (
    <>
      {items.filter(items => (items.email === state.friend)).map(items =>
        <div style={{marginLeft:'auto',display:'flex'}}>
          <p>{items.name}:</p>
          <p>{items.score}/5</p>
        </div>
      )}
    </>
    )
  }

  return (
    <div className='game-data'>
        {level} level
        <FriendData /><br/>
    </div>
  )
}
