
import { Projects, Home, About, Contact, Burger, Footer } from "../components";
import styled from "styled-components";
import Turntable from "../components/Turntable";

const MainPage = () => {
  

  return (
    <StyledMainPage>
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
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
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
  
`;

const StyledProjects = styled.div`
  height: auto;
  width: 100%;
  padding: 0 100px;
`;



