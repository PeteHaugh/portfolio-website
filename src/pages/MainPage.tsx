import { useEffect } from 'react';
import { Projects, Home, About, Navbar, Contact } from '../components';
import styled from 'styled-components';
import Turntable from '../components/Turntable';
import { ArrowCircleUp } from 'phosphor-react';

const StyledMainPage = styled.main`
    
`;

const StyledProject = styled.div`
    position: absolute;
    left: 50vw;
    top: 20vh;
`;

const StyledSection = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 100px;
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
                <Navbar />
                <StyledSection id='Home'>
                    <Home />
                    <StyledProject >
                        <Turntable />
                    </StyledProject>
                </StyledSection>
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
                </StyledFooter>
            </StyledMainPage>
        </>
    )
}

export default MainPage