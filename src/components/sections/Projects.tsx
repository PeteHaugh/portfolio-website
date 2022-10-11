import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowSquareOut, GitBranch, GithubLogo } from "phosphor-react";

const Projects = () => {
  return (
    <StyledProjectsSection>
      <h1>Projects</h1>

      <StyledProject>
        <TextDiv>
          <h2>
            <a
              href="https://social-media-app-snvj.vercel.app/#_"
              target="_blank"
              rel="noreferrer"
            >
              Social Media
            </a>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            adipisci! Cupiditate necessitatibus perferendis iure iusto vero quod
            delectus provident suscipit voluptates. Cumque blanditiis totam
            obcaecati repellat ipsam veniam dicta! Eius.
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li></li>
          </ul>
          <ProjectLinks>
            <ArrowSquareOut size={36} />
            <GithubLogo size={36} />
          </ProjectLinks>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>

      <StyledProject>
        <TextDiv>
          <h2>
            <a
              href="https://messaging-app-cf251.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Messaging App
            </a>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            adipisci! Cupiditate necessitatibus perferendis iure iusto vero quod
            delectus provident suscipit voluptates. Cumque blanditiis totam
            obcaecati repellat ipsam veniam dicta! Eius.
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li></li>
          </ul>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>

      <StyledProject>
        <TextDiv>
          <h2>
            <a
              href="https://blog-cms-seven-rho.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Connect Four
            </a>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            adipisci! Cupiditate necessitatibus perferendis iure iusto vero quod
            delectus provident suscipit voluptates. Cumque blanditiis totam
            obcaecati repellat ipsam veniam dicta! Eius.
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li></li>
          </ul>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>

      <StyledProject>
        <TextDiv>
          <h2>
            <Link to="/Synthesizer">Synthesizer</Link>
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            adipisci! Cupiditate necessitatibus perferendis iure iusto vero quod
            delectus provident suscipit voluptates. Cumque blanditiis totam
            obcaecati repellat ipsam veniam dicta! Eius.
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Tailwind CSS</li>
            <li></li>
          </ul>
          <ProjectLinks>
            <ArrowSquareOut size={24} />
            <GitBranch size={24} />
          </ProjectLinks>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>

      <h2>Other noteworthy projects</h2>

      <StyledProject>MATLAB</StyledProject>
      <StyledProject>Works in Progress</StyledProject>
      <StyledProject>Works in Progress</StyledProject>
    </StyledProjectsSection>
  );
};

export default Projects;

const TextDiv = styled.div`
  padding: 10px;
  flex: 0.4;
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 0;
    list-style: none;

    > li {
      margin: 0px 20px 0px 0px;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImageDiv = styled.div`
  flex: 0.6;
  > img {
    width: 100%;
  }
`;

const StyledProject = styled.div`
  padding: 20px;
  height: auto;
  width: 100%;
  display: flex;
`;

const StyledProjectsSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;

  h1 {
    margin: 0 0 30px 4px;
    font-size: 50px;
    color: var(--heading-color);
    text-shadow: 5px 5px 0 #bcbcbc;
  }
`;
