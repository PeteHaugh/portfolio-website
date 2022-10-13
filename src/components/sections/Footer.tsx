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
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
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
          <a href="" onClick={onButtonClick}>
            <FileText size={48} color="aliceblue" />
          </a>
        </div>
      </StyledLinks>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  height: 200px;
  width: 100%;
  background-color: #212124;
  display: flex;
`;

const StyledLinks = styled.div`
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;

  > a {
    margin: 0 auto;
    &:hover {
      transition: all 0.3s ease-in-out;
      transform: scale(0.9);
    }
  }

  > div > a {
    padding: 10px;

 
  }
  > div > a {
    &:hover {
      transition: all 0.5s ease-in-out;
      transform: scale(0.9);
    }
  }
`;
