import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export const SetAnswer = (answer,corrAnswer,navigate,state,show,handleClose,handleShow) => {
    if(answer === corrAnswer) {
        handleShow()
    }
    else {
        handleShow()
    }
}
