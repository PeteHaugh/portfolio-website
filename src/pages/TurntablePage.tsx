import React from "react";
import Turntable from "../components/Turntable";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SkipBack } from "phosphor-react";

const StyledProject = styled.div`
  height: 100vh;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
};

const TurntablePage = () => {
  return (
    <StyledProject>
      <Turntable />
      <Link to="/#Projects" style={linkStyle}>
        <SkipBack size={75} />
      </Link>
    </StyledProject>
  );
};

export default TurntablePage;
