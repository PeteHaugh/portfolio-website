import React from 'react'
import Turntable from '../components/Turntable'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SkipBack } from "phosphor-react";

type Props = {}

const StyledProject = styled.div`
    height: 100vh;
    
    
`;

const TurntablePage = (props: Props) => {
  return (
    <StyledProject id="canvasParent">
      <Turntable />
      <Link to="/"><SkipBack size={100} /></Link>
    </StyledProject>
  )
}

export default TurntablePage