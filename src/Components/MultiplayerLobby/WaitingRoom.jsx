import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue,remove, update } from 'firebase/database'
import { Button } from 'react-bootstrap';
import { ConstructionOutlined } from '@mui/icons-material';
import '../../Styles/MultiplayerLobby.css'

export const WaitingRoom = () => {
    const {state} = useLocation()
    const [items,setItems] = useState([])
    const navigate = useNavigate()    
    const[myCallReq,setMyCall] = useState(false)

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

    const CallReq = (items) => {
        setMyCall(items.CallReq)
        update(ref(db,`/${items.uuid}`), {
            callReq:true,
            call:state.friend,
            uuid:items.uuid        
        })
    }

    const CallEnd = (items) => {
        setMyCall(items.CallReq)
        update(ref(db,`/${items.uuid}`), {
            callReq:false,
            call:'',
            score:0,
            uuid:items.uuid        
        })
        navigate('/multiplayerLobby',  {
            state: {
                email:state.email,
                level:1
            }
            })
    }

    const SearchMyCallReq = ({items}) => {
        setMyCall(items.callReq)
    }

    console.log(state.friend,'friend')

    const ToGame = () => {
        navigate('/game', {
            state: {
                email:state.email,
                friend:state.friend, 
                corrAns:0,
                level:1
            }
        })
    }

    const CheckMe = () => {
        return (
            <>
                {items.filter(items => (items.email === state.email)).map(items =>
                <>
                    {items.call === state.friend && items.callReq === true &&
                    <>  
                            <ToGame />
                    </>
                    }
                </>
                )}
            </>
        )
    }

    const CheckYour = () => {
        {items.filter(items => (items.email === state.friend)).map(items => 
            CallEnd(items)
        )}
    }

  return (
    <div className='multiplayer-detail'>  
        <h2>Cekanje prijatelja {state.friend}</h2>
        <hr/>  
        {items.filter(items => (items.call === state.email)).map(items =>
            <>
                {items.callReq === true && items.email === state.friend &&
                    <>
                        <p>prijatelj spreman</p>
                        <CheckMe />
                    </>
                }
            </>
        )}

        {items.filter(items => (items.email === state.email)).map(items =>
            <>
                <SearchMyCallReq items={items}/><br/>
                <div>
                {!myCallReq?
                    <>
                        <Spinner animation="grow" /><br/>
                        <Button onClick={() => CallReq(items)}>Spremni</Button>
                        <Button className='lobby-btn'  onClick={() => CheckYour()} variant='danger'>Zavrsi poziv</Button>
                    </>
                    :
                    <Button className='lobby-btn'  onClick={() => CallEnd(items)} variant='danger'>Niste spremni</Button>
                }
                </div>
            </>
        )}
    </div>
  )
}
