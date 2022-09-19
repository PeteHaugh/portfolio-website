import React from 'react'
import Turntable from '../components/Turntable'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SkipBack } from "phosphor-react";
import { isAbsolute } from 'path';

type Props = {}

const StyledProject = styled.div`
    height: 100vh;
    
    
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
}

const TurntablePage = (props: Props) => {
  return (
    <StyledProject id="canvasParent">
      <Turntable />
      <Link to="/" style={linkStyle}><SkipBack size={75} /></Link>
    </StyledProject>
  )
}

export default TurntablePage