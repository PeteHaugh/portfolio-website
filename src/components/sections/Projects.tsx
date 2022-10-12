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
      <StyledProjectRev>
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
      </StyledProjectRev>
      <StyledProject>
        <TextDiv>
          <h2>
            <a
              href="https://blog-cms-seven-rho.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Cooking Blog
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
            <Link to="/ConnectFour">Connect Four</Link>
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
      <OtherProjectDiv>
        <OtherProject>MATLAB</OtherProject>
        <OtherProject>MATLAB</OtherProject>
        <OtherProject>MATLAB</OtherProject>
      </OtherProjectDiv>
    </StyledProjectsSection>
  );
};

export default Projects;

const TextDiv = styled.div`
  padding-bottom: 10px;
  flex: 0.4;
  display: flex;
  flex-direction: column;

  > h2 {
    margin-top: 0;
  }

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
    min-width: 300px;
  }
`;

const StyledProject = styled.div`
  margin: 50px;
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StyledProjectRev = styled.div`
  padding: 20px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const StyledProjectsSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;

  h1 {
    margin: 0 0 4px 4px;
    font-size: 50px;
    color: var(--heading-color);
    text-shadow: 5px 5px 0 #bcbcbc;
  }
`;

const OtherProjectDiv = styled.div`
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
`;
const OtherProject = styled.div`
  background-color: aliceblue;
  height: 300px;
`;
