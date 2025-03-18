// import {  useState } from 'react';
// import './App.css'
// import MessagesContainer from './MessagesContainer';

// export default function App() {
//  const [messages,setMessages]=useState<{id:number, content:string}[]>([]);
//  const [message,setMessage]=useState<string>("");
//  const autoMsg="hello user";
// const sendMessage = (text:string)=>{
//   setMessages([...messages, {id:messages.length+1, content:text}, {id:messages.length+1, content:autoMsg}])

//   setMessage("");
// }
// if(messages.length>10){
//   return <div>
//     You've reached the maximum ..
//   </div>
// }
//   return (
//     <div className='p-2'>
//      <MessagesContainer messages={messages}/>
//       {/* <input value={message} accept='text' onChange={(message)=>setMessage(message)} /> */}
//       <input className='text-right' value={message} onChange={(e) => setMessage(e.target.value)} />

//       <button onClick={()=>sendMessage(message)} >submit</button>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [displayText, setDisplayText] = useState<string>('');
  const [inputText, setInputText] = useState<string>('');
  const animationDone = useRef(false); 

  useEffect(() => {
    if (animationDone.current) return; 

    const message = "heeeey beshooooo ❤️\nاكتب 😂";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < message.length-1) {
        setDisplayText((prev) => prev + message[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        animationDone.current = true; 
      }
    }, 100); 

    return () => clearInterval(typingInterval);
  }, []);

  const handleInput = (text: string) => {
    const cleanedText = text.replace(/\d+\s+\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/g, '');
    setInputText(cleanedText);
  };

  return (
    <div className='p-2'>
      <div className='typing-animation'>
        <pre>{displayText}</pre>
      </div>

      <textarea
        value={inputText}
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Write something here..."
        rows={5}
        cols={40}
      />
    </div>
  );
}