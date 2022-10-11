import styled from "styled-components";

const About = () => {
  return (
    <>
      <StyledAboutSection>
        <AboutText>
          <h1>About</h1>
          <h2>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illo
            beatae deserunt eaque neque praesentium velit accusamus quidem non
            veniam cupiditate impedit, vel fuga atque molestiae sapiente culpa
            cum modi.
          </h2>
        </AboutText>
        <ImgContainer>
          <StyledImg src={require("../../assets/images/coffee.webp")} />
        </ImgContainer>
      </StyledAboutSection>
    </>
  );
};

export default About;

const AboutText = styled.div`
  width: 70vw;

  > h1 {
    margin: 0 0 30px 4px;
    font-size: 50px;
    color: var(--heading-color);
    font-size: clamp(40px, 8vw, 60px);
  }
`;

const StyledAboutSection = styled.section`
  width: 100%;
  min-height: 80vh;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: row-reverse;
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
`;
