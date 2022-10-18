// @ts-nocheck
import { ComputerTower } from "phosphor-react";
import React from "react";
import styled from "styled-components";

const Row = ({ row }) => {
  return (
    <tr>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} />
      ))}
    </tr>
  );
};

const Cell = ({ value }) => {
  let color = "whiteCircle";

  if (value === "O") {
    color = "redCircle";
  } else if (value === "X") {
    color = "yellowCircle";
  }

  return (
    <td>
      <FlexDiv justify="center" align="center" className="gameCell">
        <div className={color}></div>
      </FlexDiv>
    </td>
  );
};

export default Row;

const FlexDiv = styled.div`
  display: flex;
  background-color: #1990ff;
  border-radius: 3px;
  .gameCell {
    height: 80px;
    width: 80px;
    cursor: pointer;

    @media screen and (max-width: 512px) {
      height: 50px;
      width: 50px;
    }
  }

  .whiteCircle,
  .redCircle,
  .yellowCircle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;

    @media screen and (max-width: 512px) {
      height: 40px;
      width: 40px;
    }
  }

  .whiteCircle {
    background-color: #fff;
  }

  .redCircle {
    background-color: rgb(251, 42, 42);
    transition: all 0.2s;
    border: 10px solid rgb(181, 42, 42);
    @media screen and (max-width: 512px) {
      border: 5px solid rgb(181, 42, 42);
    }
  }

  .yellowCircle {
    background-color: rgb(243, 239, 20);
    transition: all 0.2s 0.6s;
    border: 10px solid rgb(192, 189, 35);
    @media screen and (max-width: 512px) {
      border: 5px solid rgb(192, 189, 35);
    }
  }
`;
