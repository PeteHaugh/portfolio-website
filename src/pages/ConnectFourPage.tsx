import React from 'react'
import ConnectFour from '../components/ConnectFour'
import styled from 'styled-components';

type Props = {}

const StyledPage = styled.div`
  width: 800px;
  margin: 0 auto;

`;

const ConnectFourPage = (props: Props) => {
  return (
    <StyledPage>
      <ConnectFour />
    </StyledPage>
  )
}

export default ConnectFourPage