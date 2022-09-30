import { useEffect } from 'react';
import { Projects, Home, About, Navbar, Contact } from '../components';
import styled from 'styled-components';
import Turntable from '../components/Turntable';
import { ArrowCircleUp, GithubLogo, LinkedinLogo } from 'phosphor-react';

const StyledMainPage = styled.main`
    
`;

const StyledFlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const StyledHome = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px 100px;
    
    /* background: linear-gradient(#225794, #2f3e73); */
`;

const StyledAbout = styled.div`
    width: 100%;
    height: 80vh;
    padding: 0 100px;
    background-color: aliceblue;
`;

const StyledProjects = styled.div`
    height: auto;
    width: 100%;
    padding: 0 100px;
`;

const StyledContact = styled.div`
    height: 300px;
    width: 100%;
    padding: 0 100px;
`;

const StyledFooter = styled.div`
    height: 200px;
    width: 100%;
    padding: 0 100px;
    background-color: #212124;
`;


const MainPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
            <StyledMainPage>
                {/* <Navbar /> */}
                <StyledHome id='Home'>
                    <StyledFlexWrapper>
                        <Home />
                        <Turntable />
                    </StyledFlexWrapper>
                </StyledHome>
                <StyledAbout id='About'>
                    <About />
                </StyledAbout >
                <StyledProjects id='Projects' >
                    <Projects />
                </StyledProjects>
                <StyledContact id='Contact' >
                    <Contact />
                </StyledContact>
                <StyledFooter>
                    <a href="#Home"><ArrowCircleUp size={48} /></a>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/peter-haugh-224548125'>
                        <LinkedinLogo size={48} />
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/PeteHaugh'>
                        <GithubLogo size={48} />
                    </a>
                </StyledFooter>
            </StyledMainPage>
        </>
    )
}

export default MainPage