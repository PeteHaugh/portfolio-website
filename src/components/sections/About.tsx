import styled from "styled-components";

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <AboutText>
          <h1>About</h1>
          <h2>
            I'm a mechanical engineer turned software engineer with a wide range of professional experiences in 
          </h2>

          I am confident working with
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Python</li>
            <li></li>
            <li></li>
          </ul>

          I also have experience using Flask,

          Currently, I'm trying to learn 

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
  padding-right: 150px;

  > h1 {
    margin: 0 0 30px 0;
    font-size: 50px;
    color: var(--heading-color);
    font-size: clamp(40px, 8vw, 60px);
    text-shadow: 5px 5px 0 #bcbcbc;
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
