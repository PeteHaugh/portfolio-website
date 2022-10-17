import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowSquareOut, Code, GithubLogo } from "phosphor-react";

const Projects = () => {
  return (
    <StyledProjectsSection>
      <h1>Projects</h1>
      <StyledProject>
        <TextDiv>
          <h2>Social Media</h2>
          <p>
            A Reddit style social media app. After logging in using OAuth, uses
            can create posts, create subreddits, comment on posts and more. It
            also includes a functioning up vote system and karma. This project
            was made to practice using GraphQL
            <hr />
            Feel free to leave a post!
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>GraphQL</li>
            <li>SQL</li>
            <li>Tailwind CSS</li>
          </ul>
          <ProjectLinks>
            <a
              href="https://social-media-app-snvj.vercel.app/#_"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} />
            </a>
            <a
              href="https://github.com/PeteHaugh/social-media-app"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} />
            </a>
          </ProjectLinks>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>

      <StyledProjectRev>
        <TextDivRev>
          <h2>Messaging App</h2>

          <p>
            A live messaging app using Firebase Hooks to delivery messaging,
            featuring different chat rooms powered by redux.
          </p>

          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Style Components</li>
          </ul>
          <ProjectLinksRev>
            <a
              href="https://messaging-app-cf251.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} />
            </a>
            <a
              href="https://github.com/PeteHaugh/messaging-app"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} />
            </a>
          </ProjectLinksRev>
        </TextDivRev>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProjectRev>
      <StyledProject>
        <TextDiv>
          <h2>Cooking Blog</h2>

          <p>
            A cooking blog
            <hr />
            Check out the source cotent @TheGreedyGinger!
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Sanity CMS</li>
            <li>Tailwind CSS</li>
          </ul>
          <ProjectLinks>
            <a
              href="https://blog-cms-seven-rho.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} />
            </a>
            <a
              href="https://github.com/PeteHaugh/blog-cms"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} />
            </a>
          </ProjectLinks>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>
      <StyledProjectRev>
        <TextDivRev>
          <h2>
            <Link to="/ConnectFour">Spotify</Link>
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
          <ProjectLinksRev>
            <a
              href="https://blog-cms-seven-rho.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} />
            </a>
            <a
              href="https://github.com/PeteHaugh/blog-cms"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} color="#E85A4F" />
            </a>
          </ProjectLinksRev>
        </TextDivRev>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProjectRev>
      <h2>Other noteworthy projects</h2>
      <OtherProjectDiv>
        <OtherProject>
          <div>
            <h2>MATLAB</h2>
            <Code size={36} />
          </div>
          <p>
            A first principles partial differential equation solv **Disclaimer,
            intense maths**
          </p>
          <div>
            <ArrowSquareOut size={36} />
            <GithubLogo size={36} />
          </div>
        </OtherProject>

        <OtherProject>
          <div>
            <h2>Go Chat</h2>
            <Code size={36} />
          </div>
          <p>
            A basic chatroom using websockets and a backend written in Golang.
            This
          </p>
          <div>
            <ArrowSquareOut size={36} />
            <GithubLogo size={36} />
          </div>
        </OtherProject>

        <OtherProject>
          <div>
            <h2>Connect Four</h2>
            <Code size={36} />
          </div>
          <p>
            A simple connect four game, where you play against the computer. The
            computer consists of the Minimax algorithm, a recursive algorithm
            which is used for finding the optimum move. The backend is written
            in Python and deployed using Flask, which sends optimum responses to
            player moves on the React based interface.
            <hr />
            If you beat the AI, I'll improve the way it evaluates gamestate!
          </p>
          <div>
            <ArrowSquareOut size={36} />
            <GithubLogo size={36} />
          </div>
        </OtherProject>
      </OtherProjectDiv>
    </StyledProjectsSection>
  );
};

export default Projects;

const TextDiv = styled.div`
  padding: 10px 20px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  line-height: 1.4;

  > h2 {
    margin-top: 0;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    position: relative;
    padding: 0;
    list-style: none;
    margin: 25px 0px 10px;

    > li {
      margin: 0px 20px 0px 0px;
      &:hover {
        transition: all 0.1s linear;
        transform: scale(1.05);
        color: var(--heading-color);
      }
    }
  }

  > p {
    padding-right: 30px;
  }

  > p > hr {
    height: 10px;
    visibility: hidden;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;

  > a {
    padding: 2px;
    font-weight: bold;

    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(0.9);
    }
  }
`;

const ImageDiv = styled.div`
  flex: 0.5;

  > img {
    width: 100%;
    box-shadow: 5px 5px 0 #bcbcbc;
    border-radius: 5px;

    &:hover {
      transition: all 0.3s ease-in-out;
      transform: scale(0.99);
      box-shadow: 3px 3px 0 #bcbcbc;
    }
  }

  @media screen and (max-width: 1024px) {
    max-width: 70vw;
    margin: 10px auto;
  }
`;

const StyledProject = styled.div`
  margin: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const StyledProjectRev = styled(StyledProject)`
  flex-direction: row-reverse;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextDivRev = styled(TextDiv)`
  @media screen and (min-width: 1024px) {
    > h2 {
      text-align: right;
    }
    > ul {
      justify-content: flex-end;
    }
    > p {
      text-align: right;
      padding-right: 0px;
      padding-left: 30px;
    }
  }
`;

const ProjectLinksRev = styled(ProjectLinks)`
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
`;

const StyledProjectsSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;

  h1 {
    margin-left: 50px;
    margin-bottom: 0;
    font-size: 50px;
    color: var(--heading-color);
    text-shadow: 5px 5px 0 #bcbcbc;
  }
`;

const OtherProjectDiv = styled.div`
  list-style: none;
  padding: 0px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
  width: 70vw;
`;

const OtherProject = styled.div`
  background-color: aliceblue;
  box-shadow: 5px 5px 0 #bcbcbc;
  border-radius: 5px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;

  > p {
    padding: 0 20px;
    margin: 0;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    padding-bottom: 20px;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(0.99);
    box-shadow: 3px 3px 0 #bcbcbc;
  }
`;
