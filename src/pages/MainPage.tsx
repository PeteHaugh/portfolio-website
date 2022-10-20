import { Projects, Home, About, Contact, Burger, Footer } from "../components";
import styled from "styled-components";
import Turntable from "../components/Turntable";
import { CaretDoubleDown } from "phosphor-react";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Burger />
      <StyledHome id="Home">
        <Home />
        <Turntable />
        <CaretDoubleDown className="icon" size={48} />
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

const StyledMainPage = styled.main``;

const StyledHome = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding-top: 50px;
  }

  .icon {
    position: absolute;
    bottom: 180px;
    animation: down 2s linear infinite;

    @media screen and (max-width: 1024px) {
      bottom: 600px;
    }

    @keyframes down {
      0% {
        transform: translateY(0);
        opacity: 1;
      }

      10% {
        transform: translateY(-20%);
        opacity: 1;
      }
      20% {
        transform: translateY(0);
        opacity: 1;
      }
      30% {
        transform: translateY(-20%);
        opacity: 1;
      }
      40% {
        transform: translateY(0);
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
      90% {
        opacity: 0.5;
      }

      100% {
        transform: translateY(0);
      }
    }
  }
`;
