import React from 'react'
import Turntable from '../components/Turntable'
import styled from 'styled-components';

type Props = {}

const StyledProject = styled.div`
    height: 100vh;
    
    
`;

const TurntablePage = (props: Props) => {
  return (
    <StyledProject id="canvasParent">
      <Turntable />
    </StyledProject>
  )
}

export default TurntablePage