import React from 'react';
import './ChatHistory.scss';
import { Message } from '../../components/index'

const ChatHistory = (props) => {

    const messages = props.chatHistory.map(msg => <Message key={msg.timeStamp} message={msg.data}/>);
    
    return (
       <div className='ChatHistory'>
        <h2>Chat History</h2>
        {messages}
       </div> 
    );
}

export default ChatHistory;