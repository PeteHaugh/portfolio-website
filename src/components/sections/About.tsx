import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

type Props = {}

const StyledAboutSection = styled.section`
  /* -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: relative;
  justify-content: center;
  text-align: center;
  top: 50%;
  width: 40%; */
  /* display: flex;
  flex-direction: row; */
  margin: 0 auto;

  display: flex;
  height: 100%;
  align-items: center;
  max-width: 900px;

  h1 {
    margin: 0 0 30px 4px;
    font-size: 50px;
    color: var(--heading-color)
  }

  .big-heading {
    font-size: clamp(40px, 8vw, 60px);
  }

  img {
    width: 300px;
    overflow: hidden;
    object-fit: cover;
    flex-shrink: 0;
  }
`;





const About = (props: Props) => {

  const [ isMounted, setIsMounted ] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() =>  setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, [])
    
  const one = <h1 className='big-heading'>About</h1>
  const two = <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi illo beatae deserunt eaque neque praesentium velit accusamus quidem non veniam cupiditate impedit, vel fuga atque molestiae sapiente culpa cum modi.</h2>
  const three = <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolore sed sapiente voluptas provident delectus eaque dolorum asperiores sint aliquam placeat fuga deserunt nulla expedita adipisci eligendi, accusamus et labore.</p>

  const items = [one, two, three];

  return (
    <>
      <StyledAboutSection>
        <div>
            <TransitionGroup component={null}>
                
                  {isMounted &&
                    items.map((item, i) => (
                      <CSSTransition key={i} classNames="fadein" timeout={2000}>
                          <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                      </CSSTransition>
                    ))}
                    <CSSTransition key={4} classNames="fadein" timeout={2000}>
                      <img src={require('../../assets/images/Profile.JPG')} alt='Profile'/>
                    </CSSTransition>
            </TransitionGroup>
        </div>
        
      </StyledAboutSection>
        
    </>
  )
}

export default About