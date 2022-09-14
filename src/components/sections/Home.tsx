import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const StyledHomeSection = styled.section`
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0; 
  text-align: left;

  h1 {
    padding-top: 200px;
    margin: 0 0 30px 4px;
    font-size: 50px;
    color: var(--heading-color)
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }

`;

export const Home = () => {
  const [ isMounted, setIsMounted ] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() =>  setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, [])
  
const one = <h1 className='big-heading'>Pete Haugh</h1>
const two = <h2>I make things and solve problems</h2>
const three = <p>I'm an engineer with experience in a wide range of fields, specialising in electro-mechanical design, UX and software</p>

const items = [one, two, three];

  return (
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
  )
}

export default Home