import React from 'react'
import '../../Styles/Game.css'

export const QuestionC = ({question}) => {
  return (
    <div className='question'>
        <img src={question} height='120vh' />
    </div>
  )
}
