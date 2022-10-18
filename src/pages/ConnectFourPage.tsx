import React from "react";
import { ConnectFour } from "../components/index";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SkipBack } from "phosphor-react";

type Props = {};

const StyledPage = styled.div`
  width: 800px;
  margin: 0 auto;
`;

const ConnectFourPage = (props: Props) => {
  return (
    <StyledPage>
      <h1>Connect Four!</h1>
      <ConnectFour />
      <Link to="/#Projects">
        <SkipBack size={100} />
      </Link>
    </StyledPage>
  );
};

export default ConnectFourPage;
