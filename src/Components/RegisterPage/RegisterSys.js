import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {app,db} from '../../firebase'
import { uid } from 'uid'
import { set,ref } from 'firebase/database'

export const RegisterSys = (name,email,password,ctg,coins) => {
    const auth = getAuth(app);

    const writeToDatabase = () => {
        const uuid = uid()
        set(ref(db, `/${uuid}`), {
          name,
          email,
          password,
          ctg,
          coins,
          call:'',
          callReq:false,
          score:0,
          brojac:1,
          uuid 
        })
      }
    
    const SignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {          
            const user = userCredential.user;
            console.log(user)
            writeToDatabase()
        })
        .catch((error) => {
            alert(error)
        })
    }

    SignUp()
}