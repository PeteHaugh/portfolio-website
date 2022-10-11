import React from "react";
import { ArrowCircleUp, GithubLogo, LinkedinLogo } from "phosphor-react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLinks>
        <a href="#Home">
          <ArrowCircleUp size={48} color="white"/>
        </a>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/peter-haugh-224548125"
          >
            <LinkedinLogo size={48} color="white"/>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/PeteHaugh"
          >
            <GithubLogo size={48} color="white"/>
          </a>
        </div>
      </StyledLinks>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 200px;
  width: 100%;
  padding: 0 100px;
  background-color: #212124;
  display: flex;
`;

const StyledLinks = styled.div`
    margin: 0 auto;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;

    > a {
        margin: 0 auto;
    }

    > div > a {
        padding: 10px;
    }
`;
