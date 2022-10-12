import styled from "styled-components";
import { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const Home = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 className="big-heading">Pete Haugh</h1>;
  const two = <h2>I make things and solve problems</h2>;
  const three = (
    <p>
      I'm an engineer with experience in a wide range of fields, specialising in
      electro-mechanical design, UX and software
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

  h1 {
    margin: 0 0 30px 4px;
    font-size: 90px;
    color: var(--heading-color);
    text-shadow: 5px 5px 0 #bcbcbc;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 100px);
  }

  @media screen and (max-width: 1024px) {
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
