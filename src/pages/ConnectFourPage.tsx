import React from "react";
import { ConnectFour } from "../components/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SkipBack } from "phosphor-react";

type Props = {};

const StyledPage = styled.div`
  width: 100vw;
  margin: 0 auto;

  .return {
    position: fixed;
    top: 2rem;
    left: 2rem;
    color: black;
    font-size: 50px;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(0.8);
      color: #1e78cc;
    }

    @media screen and (max-width: 512px) {
      top: 1.2rem;
      left: 1rem;
      font-size: 40px;
  }
  }

  > h1 {
    text-align: center;
    color: var(--heading-color);
    text-shadow: 2px 2px 0 #bcbcbc;
  }
`;

const ConnectFourPage = (props: Props) => {
  return (
    <StyledPage>
      <h1>Connect Four!</h1>
      <ConnectFour />
      <Link className="return" to="/#Projects">
        <SkipBack />
      </Link>
    </StyledPage>
  );
};

export default ConnectFourPage;
