import styled from "styled-components";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const two = <h1 className="big-heading">Pete Haugh.</h1>;
  const three = (
    <h2>
      I'm a software engineer.
    </h2>
  );
  const one = (
    <p>
      Hello! My name is,
    </p>
  );
  const items = [one, two, three];

  return (
    <>
      <StyledHomeSection>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadein" timeout={2000}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledHomeSection>
    </>
  );
};

export default Home;

const StyledHomeSection = styled.section`
  width: 600px;
  min-height: 100px;
  flex-wrap: none;
  position: relative;
  padding-left: 50px;

  @media screen and (max-width: 1200px) {
    width: 35vw;
  }

  h1 {
    margin: 0 0 30px 4px;
    font-size: 90px;
    color: var(--heading-color);
    text-shadow: 5px 5px 0 #bcbcbc;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(5rem, 8vw, 6.25rem);
    
    text-decoration: underline;
    text-decoration-thickness: 12px;
  }

  h2 {
    padding-top: 10px;
    padding-left: 10px;
    font-size: 1.5rem;
  }

  p {
    font-weight: 600;
    padding-left: 15px;
  }

  @media screen and (max-width: 1024px) {
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;

    h2 {
      font-size: 1.3rem;
    }
  }
`;
