import React from "react";
import {
  ArrowCircleUp,
  FileText,
  GithubLogo,
  LinkedinLogo,
} from "phosphor-react";
import styled from "styled-components";

const Footer = () => {
  const onButtonClick = () => {
    fetch("Pete_Haugh_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Pete_Haugh_CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <StyledFooter>
      <StyledLinks>
        <a href="#Home">
          <ArrowCircleUp size={48} color="white" />
        </a>

        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/peter-haugh-224548125"
          >
            <LinkedinLogo size={48} color="aliceblue" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/PeteHaugh"
          >
            <GithubLogo size={48} color="aliceblue" />
          </a>
          <span onClick={onButtonClick}>
            <FileText size={48} color="aliceblue" />
          </span>
        </div>
      </StyledLinks>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 200px;
  width: 101%;
  background-color: #212124;
  display: flex;
`;

const StyledLinks = styled.div`
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;

  > a,
  span {
    margin: 0 auto;
    &:hover {
      transition: all 0.3s ease-in-out;
      transform: scale(0.9);
    }
  }

  > div > a,
  span {
    padding: 10px;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(0.9);
    }
  }
`;
