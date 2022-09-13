// @ts-nocheck
import React, { useState, useReducer } from 'react'
import { make_move, start_game } from '../api/ConnectFour'
import '../styles'


const ConnectFour = () => {

  const columns = [...Array(7).keys()]

  

  return (
    <>
      <h1>ConnectFour!</h1>

      <div className='container'>
          
         
          {columns.map((column) => (
            <button className='drop' key={column} name={column} onClick={() => make_move(column+1)}>{column+1}</button>
          ))}

          <div className='game-table'>

          </div>



      </div>

      <button onClick={() => start_game()}></button>



    </>
    
  )
  
}

export default ConnectFour