// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Header, ChatHistory, ChatInput } from '../components';
import { connect, sendMessage } from '../api/ChatRoomAPI';
import { Link } from 'react-router-dom';
import { SkipBack } from 'phosphor-react';

const ChatroomPage = () => {
      const [chatHistory, setChatHistory] = useState([]);

      useEffect(() => {
        connect((msg) => {
          console.log("New Message");
          setChatHistory((chatHistory) => ([
            ...chatHistory, 
            msg,
          ]));
        })
        console.log(chatHistory, "chatHistory")
      }, [chatHistory])

      function send(e) {
        if (e.keyCode === 13) {
          sendMessage(e.target.value);
          e.target.value = "";
        }
      }
      
      return (
        <div className='App'>
          <Header />
          <ChatHistory chatHistory={chatHistory} />
          <ChatInput send={send} />
          <Link to="/#Projects"><SkipBack size={100} /></Link>
        </div>
      )
}

export default ChatroomPage