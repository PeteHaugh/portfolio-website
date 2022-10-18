// @ts-nocheck
import { ComputerTower } from "phosphor-react";
import React from "react";
import styled from "styled-components";

const Row = ({ row }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell
          key={i}
          value={cell}
        />
      ))}
    </tr>
  );
};

const Cell = ({ value }) => {
  let color = "whiteCircle";

  if (value === 'X') {
    color = "redCircle";
  } else if (value === 'O') {
    color = "yellowCircle";
  }

  return (
    <td>
      <FlexDiv
        justify="center"
        align="center"
        className="gameCell"
      >
        <div className={color}></div>
      </FlexDiv>
    </td>
  );
};

export default Row;

const FlexDiv = styled.div`
  display: flex;
  background-color: lightblue;
  .gameCell {
    height: 70px;
    width: 70px;
    background-color: #1990ff;
    cursor: pointer;
  }

  .whiteCircle,
  .redCircle,
  .yellowCircle {
    height: 60px;
    width: 60px;
    border-radius: 100px;
  }

  .whiteCircle {
    background-color: #fff;
  }

  .redCircle {
    background-color: rgb(251, 42, 42);
    transition: background-color 0.2s 1s;
  }

  .yellowCircle {
    background-color: rgb(243, 239, 20);
    transition: background-color 0.2s;
  }
`;
