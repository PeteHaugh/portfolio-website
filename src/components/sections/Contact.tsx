import React from 'react'
import styled from 'styled-components';

type Props = {}

const StyledContactSection = styled.section`
  /* -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: relative;
  justify-content: center;
  text-align: center;
  top: 50%;
  width: 40%; */
  /* display: flex;
  flex-direction: row; */
  margin: 0 auto;
  padding: 0 100px;
  max-width: 900px;
`;

const Contact = (props: Props) => {
  return (
    <StyledContactSection>
      <h1>Contact</h1>
    </StyledContactSection>
  )
}

export default Contact