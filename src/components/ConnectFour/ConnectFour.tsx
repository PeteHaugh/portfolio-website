// @ts-nocheck
import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Confetti from "react-confetti";
import { Row } from "../index";

axios.defaults.baseURL = "http://localhost:5000";

const newBoard = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

const ConnectFour = () => {
  const [board, setBoard] = useState([newBoard]);
  const columns = [...Array(7).keys()];

  const handleMove = (column) => {
    axios.get(`/move/${column}`).then((response) => setBoard(response.data));
  };

  const handleReset = () => {
    axios.get("/start").then((response) => setBoard(response.data));
  };

  console.log(board[1]);

  return (
    <>
    {board && board[1] === 'O won!' && <Confetti />}
      <StyledButtonRow>
        {columns.map((column) => (
          <StyledButton
            key={column}
            name={column}
            onClick={() => handleMove(column+1)}
            disabled={board[1] === 'X won!' || board[2] === 'O won!'}
          >
            {column + 1}
          </StyledButton>
        ))}
      </StyledButtonRow>
      <Wrapper>
        <table>
          <tbody>
            {board[0].map((row, i) => (
              <Row key={i} row={row} />
            ))}
          </tbody>
        </table>
      </Wrapper>
     
      <StyledButtonRow>
        <button onClick={() => handleReset()}>New Board</button>
        {board && board[1]}
      </StyledButtonRow>
      {/* </StyledWrapper> */}
    </>
  );
};

export default ConnectFour;

const Wrapper = styled.div`
display: inline-block;
  transform: rotate(90deg) scaleY(-1);;
  /* transform: scaleX(-1); */
  margin: 0 auto;
`;
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid lightblue;
  height: 80vh;
  width: 600px;
  margin: 0 auto;
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
  align-items: center;
  width: 100px;
  height: 600px;
`;

const StyledButton = styled.button`
  width: 100px;
  max-height: 50px;
  align-items: center;
  justify-content: space-between;
`;

const StyledCell = styled.div`
  height: 90px;
  width: 90px;
  aspect-ratio: 1/1;
  border: -2px solid;
`;
