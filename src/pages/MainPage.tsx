import { Projects, Home, About, Contact, Burger, Footer } from "../components";
import styled from "styled-components";
import Turntable from "../components/Turntable";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Burger />
      <StyledHome id="Home">
        <Home />
        <Turntable />
      </StyledHome>
      <div id="About">
        <About />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer />
    </StyledMainPage>
  );
};

export default MainPage;

const StyledMainPage = styled.main`

`;

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 20px 100px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 1500px) {
    padding-top: 50px;
  }
`;
