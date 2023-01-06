import React from 'react'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import {app} from '../../firebase'
import { useNavigate } from 'react-router-dom';

export const LoginSys = (email,password,navigate) => {
    
    const auth = getAuth()
    
    const signIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user.email,'user')
            navigate('/start', {
                state: {
                    email,
                    level:1
                }
            })
        })
        .catch((error) => {
            alert(error)
        })
    }

    setPersistence(auth, browserSessionPersistence)
    .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user.email,'user')
            navigate('/start', {
                state: {
                    email,
                    level:1
                }
            })
        })
        .catch((error) => {
            alert(error)
        })
    })
    .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    });
}
