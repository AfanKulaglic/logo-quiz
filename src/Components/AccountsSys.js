import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { uid } from 'uid'
import  { set, ref, onValue } from 'firebase/database'
import { useLocation } from 'react-router-dom'
import '../App.css'

export const AccountsSys = () => {
    const [items,setItems] = useState([])
    const {state} = useLocation()

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
    <div>
        {items.filter(items => (items.email === state.email)).map(items =>
            <p>{items.name}</p>
        )}
    </div>
  )
}
