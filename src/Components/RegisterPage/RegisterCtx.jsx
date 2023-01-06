import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../Styles/Register.css'
import { Link } from 'react-router-dom'
import { RegisterSys } from './RegisterSys'

export const RegisterCtx = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[ctg,setCtg] = useState('accounts')
    const[coins,setCoins] = useState(1500)

  return (
    <div className='login-ctx'>
        <Form.Control className='input' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter username" />
        <Form.Control className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Control className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
        <Button onClick={() => RegisterSys(name,email,password,ctg,coins)} className='button'>Create account</Button>
        <p>or <Link to='/' className='link'>Login</Link></p>
    </div>
  )
}
