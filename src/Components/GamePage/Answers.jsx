import React, { useEffect, useState } from 'react'
import '../../Styles/Game.css'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { SetAnswer } from './SetAnswer'
import { db } from '../../firebase'
import { uid } from 'uid'
import  { set, ref, onValue, update } from 'firebase/database'
import { ContactlessOutlined } from '@mui/icons-material'


export const Answers = ({corrAnswer,corrAnswer1,corrAnswer2,corrAnswer3}) => {
    const[yourAns,setYourAns] = useState('')
    const[myCorrectAns,setMyCorrAns] = useState(0)
    const[clubName,setClubName] = useState('')

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

    const navigate = useNavigate()
    const {state} = useLocation()
    console.log(state.corrAns,"2000")

    const saveScoreData = (items) => {
        update(ref(db,`/${items.uuid}`), {
            score: [corrAnswer === yourAns || corrAnswer1===yourAns || corrAnswer2===yourAns || corrAnswer3===yourAns] && state.corrAns+1,
            uuid: items.uuid
        })
    }

    const ToNextLevel = () => {
        navigate('/game', {
            state: {
                email: state.email,
                corrAns: [corrAnswer === yourAns || corrAnswer1===yourAns || corrAnswer2===yourAns || corrAnswer3===yourAns] && state.corrAns+1,
                friend:state.friend,
                level: state.level + 1
            }
        })
    }

    const ToEndGame = () => {
        navigate('/endGame', {
            state: {
                email: state.email,
                corrAns: [corrAnswer === yourAns || corrAnswer1===yourAns || corrAnswer2===yourAns || corrAnswer3===yourAns] && state.corrAns+1,
                friend:state.friend,
                level: 1
            }
        })
    }

    const UpdateData = () => {
        {items.filter(items => (items.email === state.email)).map(items =>{
            setMyCorrAns(items)
            saveScoreData(items)
            console.log({items})
        })}
    }

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        UpdateData()
        if(state.level < 9) {
            ToNextLevel()
            saveScoreData()
        }
        else {
            ToEndGame()
            saveScoreData()
        }
    }
    const handleShow = () => setShow(true) 

    console.log(yourAns)

    if(yourAns === corrAnswer || yourAns === corrAnswer1 || yourAns === corrAnswer2 || yourAns === corrAnswer3) {
        setYourAns('')
        setShow(true)
    }

  return (
    <div className='answers'>
        <Form className='answer-form'>
            <Form.Control className='answer-input' type="text" value={yourAns} placeholder="" onChange={(e) => setYourAns(e.target.value)}/>
            <Button className='answer-skip-btn' 
                onClick={() => {
                    if(state.level < 9) {
                        navigate('/game', {
                            state: {
                                email: state.email,
                                corrAns: state.corrAns,
                                friend:state.friend,
                                level: state.level + 1
                            }
                        })
                    }
                    else {
                        navigate('/endGame', {
                            state: {
                                email: state.email,
                                corrAns: state.corrAns,
                                friend:state.friend,
                                level: state.level + 1
                            }
                        })
                    }
                }}
            >Skip</Button>
        </Form>
        
        <Modal show={show} onHide={handleClose} animation={false} style={{marginTop:"35vh"}}>
            <Modal.Header closeButton>
              <Modal.Title>Tacan odgovor je {corrAnswer}</Modal.Title>
            </Modal.Header>
          </Modal>
    </div>
  )
}
