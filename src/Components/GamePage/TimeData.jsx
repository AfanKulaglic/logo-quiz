import React, { useEffect, useState } from 'react'
import '../../Styles/Game.css'
import { useLocation } from 'react-router-dom'
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue } from 'firebase/database'

export const TimeData = () => {
    const {state} = useLocation()
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
    <div className='time-data'>
        {items.filter(items => (items.email === state.email)).map(items =>
		    <p>{items.clock} s</p>
        )}
    </div>
  )
}
