import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { uid } from 'uid'
import { set,ref, onValue,remove, update } from 'firebase/database'

export const CallFriend = (stEmail,items,navigate,state) => {
  
  const CallMyFriend = (items) => {
    update(ref(db,`/${items.uuid}`), {
        call:stEmail,
        score:0,
        uuid:items.uuid
    })
    navigate('/multiplayerRoom', {
      state: {
          email:stEmail,
          level:1,
          corrAns:state.corrAns,
          friend:items.email
      }
  })
  }

  CallMyFriend(items)
}
