// @ts-nocheck
import React, { useState, useReducer } from 'react'
import { Axios } from '../api/ConnectFourAPI'
import '../styles'
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const rows = 9;
const columns = 7;

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(6 , 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;
  height: 800px;
  width: 800px;

  .cellYellow {
    border-radius: 50%;
    background-color: yellow;
  }

  .cellRed {
    border-radius: 50%;
    background-color: red;
  }
`;

// const StyledCell = styled.div`
//   border-radius: 50%;

//   .red {
//     background-color: red;
//   }

//   .yellow {
//     background-color: yellow;
//   }
// `;


// try {
//   response = await axios.get(`/move/${col}`);
// } catch (error) {
//   // handle error
//   console.log(error);
// }
// return response.data

const ConnectFour = () => {
  const [board, setBoard] = useState(null)
  const columns = [...Array(6).keys()];

  const handleMove = (column) => {
    axios.get(`/move/${column}`)
      .then(response => setBoard(response.data))
  }

  const handleReset = () => {
    axios.get('/start')
      .then(response => setBoard(response.data))

  }

  return (
    <>
      <h1>ConnectFour!</h1>

      
      <StyledGameBoard>
          {columns.map((column) => (
                <button className='drop' key={column} name={column} onClick={() => handleMove(column + 1)}>{column+1}</button>
          ))}
          {console.log(board?.[0]?.[0])}

          {board && board?.[0]?.[0].map((cell, index) => (
             <div className={cell === 'X' ? 'cellYellow' : 'cellRed'} key={index}>{cell}</div>
           ))}   

          


      </StyledGameBoard>
      <button onClick={() => handleReset()}>New Board</button>

      {/* <table>
        <tbody>
          {gameState.board.map((row, i) => (

            <Row key={i} row={row} play={play} />
          ))}
        </tbody>
      </table> */}


    </>
    
  )
  
}

export default ConnectFour