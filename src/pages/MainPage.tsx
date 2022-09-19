import { useEffect } from 'react';
import { Projects, Home, About, Navbar, Contact } from '../components';
import styled from 'styled-components';

const StyledMainPage = styled.main`
    
`;

const StyledSection = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 100px;
`;

const StyledAbout = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 100px;
    background-color: aliceblue;
`;

const StyledProjects = styled.div`
    height: auto;
    width: 100%;
    padding: 0 100px;
`;

const StyledFooter = styled.div`
    height: 200px;
    width: 100%;
    background-color: red;
`;


const MainPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
            <StyledMainPage>
                <Navbar />
                <StyledSection id='home'>
                    <Home />
                </StyledSection>
                <StyledAbout id='about'>
                    <About />
                </StyledAbout >
                <StyledProjects id='projects' >
                    <Projects />
                </StyledProjects>
                <StyledSection id='contact' >
                    <Contact />
                </StyledSection>
                <footer>
                    <StyledFooter></StyledFooter>
                </footer>
            </StyledMainPage>
        </>
    )
}

export default MainPage