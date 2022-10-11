import { useRef, useState } from "react";
import { useTransition, animated } from "react-spring";
import useOnScreen from "../../hooks/useOnScreen";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Projects = () => {
  return (
    <StyledProjectsSection>
      <h1>Projects</h1>

      <StyledProject>
        <h2>
          <a
            href="https://social-media-app-snvj.vercel.app/#_"
            target="_blank"
            rel="noreferrer"
          >
            Social Media
          </a>
        </h2>
      </StyledProject>
      <StyledProject>
        <h2>
          <a
            href="https://messaging-app-cf251.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            Messaging App
          </a>
        </h2>
      </StyledProject>
      <StyledProject>
        <h2>
          <a
            href="https://blog-cms-seven-rho.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Connect Four
          </a>
        </h2>
      </StyledProject>
      <StyledProject>
        <h2>
          <Link to="/Synthesizer">Synthesizer</Link>
        </h2>
      </StyledProject>

      <h2>Other noteworthy projects</h2>
      <StyledProject>MATLAB</StyledProject>
      <StyledProject>Works in Progress</StyledProject>
      <StyledProject>Works in Progress</StyledProject>
    </StyledProjectsSection>
  );
};

export default Projects;


const StyledProjectsSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 900px;

  h1 {
    margin: 0 0 30px 4px;
    font-size: 50px;
    color: var(--heading-color);
  }
`;

const StyledProject = styled.div`
  height: 200px;
  width: 100%;
`;