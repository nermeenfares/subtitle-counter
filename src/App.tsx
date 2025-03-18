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

import { useState } from 'react';
import './App.css';

export default function App() {
  const [text, setText] = useState<string>("");

  const countWords = (text: string) => {
    const cleanedText = text.replace(/\d{2}:\d{2}:\d{2},\d{3} --> \d{2}:\d{2}:\d{2},\d{3}/g, '');

    const noNumbers = cleanedText.replace(/\b\d+\b/g, '');

    const words = noNumbers.match(/[\p{Script=Arabic}\w'’-]+/gu);
    return words ? words.length : 0;
  };

  return (
    <div className='p-2'>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows={5}
        cols={40}
      />
      <div>
        <strong>Word Count:</strong> {countWords(text)}
      </div>
    </div>
  );
}