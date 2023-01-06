import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../Styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase'
import { LoginSys } from './LoginSys';

export const LoginCtx = () => {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    console.log(email)
    
    const navigate = useNavigate()

  return (
    <div className='login-ctx'>
        <Form.Control className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        <Form.Control className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
        <Button onClick={() => LoginSys(email,password,navigate)} className='button'>Login</Button>
        <p>or <Link to='/register' className='link'> Create account</Link></p>
    </div>
  )
}
