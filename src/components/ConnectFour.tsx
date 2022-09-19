// @ts-nocheck
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

const rows = 9;
const columns = 7;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid lightblue;
  height: 80vh;
  width: 60vw;
  margin: 0 auto;

  //justify-content: space-between;
`;

const StyledButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: lightblue;
    height: 50px;
`;

const StyledGameBoard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: lightblue;
  height: 100%;
  
  .cellYellow {
    border-radius: 50%;
    background-color: yellow;
    grid-auto-flow: column;
  }

  .cellRed {
    border-radius: 50%;
    background-color: red;
    grid-auto-flow: column;
  }

  .cellWhite {
    background-color: white;
    grid-auto-flow: column;
    border-radius: 50%;
    border: 2px solid lightblue;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(60vw/6);
  height: 100%;
`;

const StyledButton = styled.button`
  width: calc(60vw/6);
  max-height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const StyledCell = styled.div`
  height: 100%;
  width: auto;
  aspect-ratio: 1/1;
`;

const ConnectFour = () => {
  const [board, setBoard] = useState([null, null])
  const columns = [...Array(6).keys()];

  useEffect(() => {
    handleReset()
  }, [])
  

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
      <StyledWrapper>
        <StyledButtonRow>
            {columns.map((column) => (
                  <StyledButton  key={column} name={column} onClick={() => handleMove(column + 1)}>{column+1}</StyledButton>
            ))}

        </StyledButtonRow>
        <StyledGameBoard>
          <StyledColumn>
          {board && board?.[0]?.[0].map((cell, index) => (
                <StyledCell className={cell === 'X' ? 'cellYellow' : cell === 'O' ? 'cellRed' : 'cellWhite'} key={index}>{cell}</StyledCell>
              ))}  
          </StyledColumn>
          <StyledColumn>
          {board && board?.[0]?.[1].map((cell, index) => (
                <StyledCell className={cell === 'X' ? 'cellYellow' : cell === 'O' ? 'cellRed' : 'cellWhite'} key={index}>{cell}</StyledCell>
              ))}  
          </StyledColumn>
          <StyledColumn>
          {board && board?.[0]?.[2].map((cell, index) => (
                <StyledCell className={cell === 'X' ? 'cellYellow' : cell === 'O' ? 'cellRed' : 'cellWhite'} key={index}>{cell}</StyledCell>
              ))}  
          </StyledColumn>
          <StyledColumn>
          {board && board?.[0]?.[3].map((cell, index) => (
                <StyledCell className={cell === 'X' ? 'cellYellow' : cell === 'O' ? 'cellRed' : 'cellWhite'} key={index}>{cell}</StyledCell>
              ))}  
          </StyledColumn>
          <StyledColumn>
          {board && board?.[0]?.[4].map((cell, index) => (
                <StyledCell className={cell === 'X' ? 'cellYellow' : cell === 'O' ? 'cellRed' : 'cellWhite'} key={index}>{cell}</StyledCell>
              ))}  
          </StyledColumn>
          <StyledColumn>
          {board && board?.[0]?.[5].map((cell, index) => (
                <StyledCell className={cell === 'X' ? 'cellYellow' : cell === 'O' ? 'cellRed' : 'cellWhite'} key={index}>{cell}</StyledCell>
              ))}  
          </StyledColumn>
        </StyledGameBoard>
        <StyledButtonRow>
        <button onClick={() => handleReset()}>New Board</button>
        {board && board[1]}
        </StyledButtonRow>
      </StyledWrapper>
    </>
    
  )
  
}

export default ConnectFour