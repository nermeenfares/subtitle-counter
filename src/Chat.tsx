// import React, { useState } from 'react'

import { useState } from "react"

function Chat() {
    const [messageContent]=useState<string>("")
    // const onSubmit = (
        
    // )=>{

    // }
  return (
    <>
   <input value={messageContent}/>
   <button/>
    </>
  )
}

export default Chat
