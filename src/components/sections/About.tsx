import styled from "styled-components";

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <ImgContainer>
          <YellowPencil
            src={require("../../assets/images/YellowPencil.webp")}
          />
          <YellowPencilShade
            src={require("../../assets/images/PencilShade.webp")}
          />
          <BlackPencil src={require("../../assets/images/BlackPencil.webp")} />
          <BlackPencilShade
            src={require("../../assets/images/PencilShade.webp")}
          />
        </ImgContainer>
        <AboutText>
          <h1>About</h1>
          <h2>
            My name is Pete and I'm a software engineer with a design
            engineering background. I enjoy taking on challenges, learning and
            delivering exciting projects. I also enjoy playing music and
            drinking coffee as you may be able to tell by the content of this
            website.
          </h2>
          <p>
            I am confident working with <span>Javascript (ES6+)</span>,{" "}
            <span>Typescript</span>, <span>SQL</span>, and <span>Python</span>
            as well as a large number of libraries, frameworks and APIs such as{" "}
            <span>React</span>, <span>Next.js</span>, <span>Express</span>, <span>node.js</span>, <span>Flask</span> and
            more...
          </p>
          <p>
            Currently, I'm trying to deepen my knowledge of React frameworks and
            learn a bit of Golang.
          </p>
        </AboutText>

        <ImgContainer>
          <StyledImg src={require("../../assets/images/coffee.webp")} />
          <StyledShadow src={require("../../assets/images/MugShade.webp")} />
        </ImgContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;

const AboutText = styled.div`
  width: 70vw;
  padding: 50px;

  > h1 {
    margin: 0 0 30px 0;
    font-size: 50px;
    color: var(--heading-color);
    font-size: clamp(40px, 8vw, 60px);
    text-shadow: 5px 5px 0 #bcbcbc;
  }

  > h2 {
    padding-right: 300px;
    color: #6f6e6a;
    line-height: 1.4;

    @media screen and (max-width: 1024px) {
      padding-right: 150px;
    }

    @media screen and (max-width: 768px) {
      padding-right: 0;
      font-size: 1.4rem;
    }
  }

  > p {
    line-height: 1.3;
    padding-right: 300px;
    font-weight: 600;

    > span {
      margin: 5px 0px 0px 0px;
      color: #6c6a66;
      font-weight: 900;
      border: 1px solid gray;
      border-radius: 2px;
      padding: 0px 4px;
      &:hover {
        transition: all 0.1s linear;
        transform: scale(1.05);
        color: var(--heading-color);
      }
    }

    @media screen and (max-width: 1024px) {
      padding-right: 150px;
    }

    @media screen and (max-width: 768px) {
      padding-right: 0;
    }
  }

  @media screen and (max-width: 1536px) {
    padding: 20px;
    padding-left: 100px;
  }

  @media screen and (max-width: 1024px) {
    padding: 20px;
    padding-left: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 50px;
    width: 100vw;
  }
`;

const StyledAboutSection = styled.section`
  width: 101%;
  min-height: 80vh;
  /* background-color: aliceblue; */
  background-image: linear-gradient(135deg, #d8c3a5, #bcbcbc);
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row-reverse;
  box-shadow: 0 3px 3px lightgray, 0 -3px 3px lightgray;
`;

const ImgContainer = styled.div`
  position: relative;
  flex: 0.3;
  height: 100px;
`;

const StyledImg = styled.img`
  width: 700px;
  position: absolute;
  top: -200px;
  left: -500px;
  transform: rotate(30deg);
  z-index: 2;

  @media screen and (max-width: 1024px) {
    left: -600px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledShadow = styled.img`
  width: 700px;
  position: absolute;
  top: -170px;
  left: -480px;
  transform: rotate(30deg);
  z-index: 1;

  @media screen and (max-width: 1024px) {
    left: -600px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const YellowPencil = styled.img`
  width: 50px;
  position: absolute;
  right: 150px;
  transform: rotateZ(30deg);
  top: -100px;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    right: 50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const YellowPencilShade = styled.img`
  width: 50px;
  position: absolute;
  right: 140px;
  transform: rotateZ(30deg);
  top: -90px;
  z-index: 1;

  @media screen and (max-width: 1024px) {
    right: 50px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BlackPencil = styled.img`
  width: 50px;
  position: absolute;
  right: 220px;
  top: -220px;
  transform: rotateZ(20deg);
  z-index: 2;

  @media screen and (max-width: 1024px) {
    right: 110px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BlackPencilShade = styled.img`
  width: 50px;
  position: absolute;
  right: 210px;
  top: -210px;
  transform: rotateZ(20deg);
  z-index: 1;

  @media screen and (max-width: 1024px) {
    right: 110px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
