import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowSquareOut, Code, GithubLogo } from "phosphor-react";

const Projects = () => {
  return (
    <StyledProjectsSection>
      <h1>Projects</h1>
      <StyledProject>
        <TextDiv>
          <h2>Portfolio Site</h2>

          <p>
            A portfolio site made using react. The interactive turntable was
            created using p5.js It also hosts the front end for some of my
            smaller projects such as my{" "}
            <Link to="/ConnectFour"> Connect Four</Link> game.
          </p>

          <ul>
            <li>React.js</li>
            <li>React Router</li>
            <li>Typescript</li>
            <li>p5.js</li>
            <li>Styled Components</li>
          </ul>
          <ProjectLinks>
            <ArrowSquareOut size={36} style={{ opacity: 0.7 }} />

            <a
              href="https://github.com/PeteHaugh/blog-cms"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} className="cursor" />
            </a>
          </ProjectLinks>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>
      <StyledProjectRev>
        <TextDivRev>
          <h2>Social Media</h2>
          <p>
            A Reddit style social media app. After logging in using OAuth, user
            can create posts, create subreddits, comment on posts and more. It
            also includes a functioning reddit-style up vote system. This
            project was made to practice using GraphQL and Apollo Client.
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
          <ProjectLinksRev>
            <a
              href="https://social-media-app-snvj.vercel.app/#_"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} className="cursor" />
            </a>
            <a
              href="https://github.com/PeteHaugh/social-media-app"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} className="cursor" />
            </a>
          </ProjectLinksRev>
        </TextDivRev>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProjectRev>

      <StyledProject>
        <TextDiv>
          <h2>Messaging App</h2>

          <p>
            A live messaging app using Firebase Hooks to deliver messages in
            real-time, featuring different chat rooms powered by redux. Log in
            using your google account to start sending messages.
          </p>

          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>Style Components</li>
          </ul>
          <ProjectLinks>
            <a
              href="https://messaging-app-cf251.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} className="cursor" />
            </a>
            <a
              href="https://github.com/PeteHaugh/messaging-app"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} className="cursor" />
            </a>
          </ProjectLinks>
        </TextDiv>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProject>
      <StyledProjectRev>
        <TextDivRev>
          <h2>Cooking Blog</h2>

          <p>
            A cooking blog that using Sanity CMS to manage the content. The site
            implements incremental static regeneration (thanks to Next) alloing
            updating of static content instantly without needing to fully
            rebuild the site
          </p>
          <p>
            Source content (with permission) from{" "}
            <a
              href="https://www.instagram.com/the_greedy_ginger/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              @TheGreedyGinger!
            </a>
          </p>

          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Sanity CMS</li>
            <li>Tailwind CSS</li>
          </ul>
          <ProjectLinksRev>
            <a
              href="https://blog-cms-seven-rho.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowSquareOut size={36} className="cursor" />
            </a>
            <a
              href="https://github.com/PeteHaugh/blog-cms"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} className="cursor" />
            </a>
          </ProjectLinksRev>
        </TextDivRev>
        <ImageDiv>
          <img src={require("../../assets/images/TestProject.png")} alt="" />
        </ImageDiv>
      </StyledProjectRev>

      <h2 className="Other">Other noteworthy projects</h2>
      <OtherProjectDiv>
        <OtherProject>
          <div className="top">
            <h3>Connect Four</h3>
            <Code size={36} />
          </div>
          <p>
            A simple connect four game, where you play against the computer. The
            computer consists of the Minimax algorithm, a recursive algorithm
            which is used for finding the optimum move. The backend is written
            in Python and deployed using Flask, which sends optimum responses to
            player moves on the React based interface.
          </p>
          <p>
            If you beat the AI, I'll improve the way it evaluates gamestate!
          </p>
          <div className="bottom">
            <Link to="/ConnectFour">
              <ArrowSquareOut size={36} className="cursor" />
            </Link>
            <GithubLogo size={36} className="cursor" />
          </div>
        </OtherProject>

        <OtherProject>
          <div className="top">
            <h3>Spotify Stats</h3>
            <Code size={36} />
          </div>
          <p>A site to view your spotify stats.</p>
          <div className="bottom">
            <ArrowSquareOut size={36} style={{ opacity: 0.7 }} />
            <GithubLogo size={36} className="cursor" />
          </div>
        </OtherProject>
        <OtherProject>
          <div className="top">
            <h3>MATLAB</h3>
            <Code size={36} />
          </div>
          <p>A first principles partial differential equation solv</p>
          <p>**Disclaimer, intense maths**</p>
          <div className="bottom">
            <ArrowSquareOut size={36} style={{ opacity: 0.7 }} />
            <a
              href="https://github.com/PeteHaugh/Transient-FEM-Modelling"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} className="cursor" />
            </a>
          </div>
        </OtherProject>

        <OtherProject>
          <div className="top">
            <h3>Go Chat</h3>
            <Code size={36} />
          </div>
          <p>
            A basic chatroom using websockets and a backend written in Golang.
            This
          </p>
          <div className="bottom">
            <ArrowSquareOut size={36} style={{ opacity: 0.7 }} />
            <a
              href="https://github.com/PeteHaugh/Golang-Chat/tree/master/backend"
              target="_blank"
              rel="noreferrer"
            >
              <GithubLogo size={36} className="cursor" />
            </a>
          </div>
        </OtherProject>

        <OtherProject>
          <div className="top">
            <h3>More to come...</h3>
            <Code size={36} />
          </div>
          <h1 className="wip">WIP</h1>
          <div className="bottom">
            <ArrowSquareOut size={36} style={{ opacity: 0.7 }} />
            <GithubLogo size={36} style={{ opacity: 0.7 }} />
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
  align-items: center;

  > a {
    padding: 2px;
    font-weight: bold;
    cursor: pointer;
    color: #6f6e6a;

    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(0.95);
      color: var(--heading-color);
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

  .Other {
    margin-left: 50px;
  }
`;

const OtherProjectDiv = styled.div`
  list-style: none;
  padding: 0px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
    align-items: center;
    padding: 0 20px;
    padding-bottom: 20px;
  }

  > .top {
    justify-content: space-between;
  }

  > .bottom {
    justify-content: flex-start;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(0.99);
    box-shadow: 3px 3px 0 #bcbcbc;
  }

  .wip {
    text-shadow: none;
    margin: 0;
    text-align: center;
    padding-right: 15px;
    color: var(--font-color);
    opacity: 0.5;
  }

  .cursor {
    cursor: pointer;
    color: #6f6e6a;

    &:hover {
      color: var(--heading-color);
      transition: all 0.3s linear;
    }
  }
`;
