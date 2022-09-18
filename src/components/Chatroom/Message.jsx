import React, { useState, useEffect } from 'react';
import './Message.scss';

const Message = (props) => {

    let temp = JSON.parse(props.message)
    
    return (
        <div className='Message'>
            {temp.Body} 
        </div>
    )
}

export default Message;