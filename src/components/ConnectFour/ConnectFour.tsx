// @ts-nocheck
import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Confetti from "react-confetti";
import { Row } from "../index";
import toast, { Toaster } from "react-hot-toast";
import { ArrowDown } from "phosphor-react";

axios.defaults.baseURL = "https://connect-four-petehaugh.herokuapp.com";

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

  useEffect(() => {
    if (board[1] === "O won!") {
      toast("You won!", {
        duration: 5000,
        position: "top-center",
        icon: "🎉",
      });
    } else if (board[1] === "X won!") {
      toast("You Lost!", {
        duration: 5000,
        position: "top-center",
        icon: "😥",
      });
    } else if (board[1] === "Board reset") {
      toast("New game started!", {
        duration: 2000,
        position: "top-center",
        icon: "🤩",
      });
    } else if (board[1] === "It's a tie!") {
      toast("It's a tie! Rematch?", {
        duration: 5000,
        position: "top-center",
        icon: "🤔",
      });
    }
  }, [board[1]]);

  const handleMove = (column) => {
    axios.get(`/move/${column}`).then((response) => setBoard(response.data));
  };

  const handleReset = () => {
    axios.get("/start").then((response) => setBoard(response.data));
  };

  console.log(board[1]);

  return (
    <BoardDiv>
      <Toaster />
      {board && board[1] === "O won!" && <Confetti />}
      <StyledButtonRow>
        {columns.map((column) => (
          <StyledButton
            key={column}
            name={column}
            onClick={() => handleMove(column + 1)}
            disabled={board[1] === "X won!" || board[2] === "O won!"}
          >
            <ArrowDown className="icon" size={48} />
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
        <ResetButton onClick={() => handleReset()}>New Board</ResetButton>
      </StyledButtonRow>
    </BoardDiv>
  );
};

export default ConnectFour;

const ResetButton = styled.button`
  cursor: pointer;
  background: #1990ff;
  color: white;
  font-weight: 700;
  border-radius: 0.5rem;
  width: 12rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(0.95);
    background: #1e78cc;
  }
`;

const BoardDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: inline-block;
  transform: rotate(90deg) scaleY(-1);
  margin: 0 auto;
  background-color: #1e78cc;
  border-radius: 3px;
`;

const StyledButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const StyledButton = styled.button`
  width: 52px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 512px) {
    width: 34px;
  }

  &:hover {
    transform: translateY(30%);
    transition: all 0.2s linear;
  }
  .icon {
    color: white;

    &:hover {
      color: var(--heading-color);
      transition: all 0.2s linear;
    }
  }
`;
