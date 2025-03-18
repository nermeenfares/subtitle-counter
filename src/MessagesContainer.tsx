// import React from 'react'

  function MessagesContainer({ messages }: { messages: { id: number; content: string }[] }) {


  return (
    <div>
      {
        messages.map(msg=>(
            <div key={msg.id}>
                {msg.content}
            </div>
        ))
      }
    </div>
  )
}

export default MessagesContainer
