import { useState } from "react";
import { Projects, Home, About, Menu, Contact, Burger } from "../components";
import styled from "styled-components";
import Turntable from "../components/Turntable";
import { ArrowCircleUp, GithubLogo, LinkedinLogo } from "phosphor-react";

const MainPage = () => {
  

  return (
    <StyledMainPage>
      {/* <Menu open={open} /> */}
      <Burger />

      <StyledHome id="Home">
        <StyledFlexWrapper>
          <Home />
          <Turntable />
        </StyledFlexWrapper>
      </StyledHome>
      <StyledAbout id="About">
        <About />
      </StyledAbout>
      <StyledProjects id="Projects">
        <Projects />
      </StyledProjects>
      <StyledContact id="Contact">
        <Contact />
      </StyledContact>
      <StyledFooter>
        <a href="#Home">
          <ArrowCircleUp size={48} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/peter-haugh-224548125"
        >
          <LinkedinLogo size={48} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/PeteHaugh">
          <GithubLogo size={48} />
        </a>
      </StyledFooter>
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.main``;

const StyledFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 100px;
`;

const StyledAbout = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 0 100px;
  background-color: aliceblue;
`;

const StyledProjects = styled.div`
  height: auto;
  width: 100%;
  padding: 0 100px;
`;

const StyledContact = styled.div`
  height: 80vh;
  width: 100%;
  padding: 0 100px;
`;

const StyledFooter = styled.div`
  height: 200px;
  width: 100%;
  padding: 0 100px;
  background-color: #212124;
`;

const NavWrapper = styled.div`
  align-items: center;
  background: #0d0c1d;
  color: #effffa;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
