// @ts-nocheck
import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import { connect, sendMessage } from './api';

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
      }, [])

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
        </div>
      )
}

export default ChatroomPage