import React from 'react'
import ConnectFour from '../components/ConnectFour'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SkipBack } from 'phosphor-react';
import { Navbar } from '../components';

type Props = {}

const StyledPage = styled.div`
  width: 800px;
  margin: 0 auto;
  width: 50%;

`;

const ConnectFourPage = (props: Props) => {
  return (
    <StyledPage>
      <Navbar />
      <h1>Connect Four!</h1>
      <ConnectFour />
      <Link to="/"><SkipBack size={100} /></Link>
    </StyledPage>
  )
}

export default ConnectFourPage