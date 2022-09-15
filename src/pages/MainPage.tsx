import { useEffect } from 'react';
import { Projects, Home, About, Navbar, Layout, Contact } from '../components';
import styled from 'styled-components';

const StyledMainPage = styled.main`
    
`;

const StyledSection = styled.div`
    width: 100%;
    height: 100vh;
    display: block;
    padding: 0 100px;
`;


const MainPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
            <StyledMainPage>
            {/* <Layout>            */}
                {/* <Navbar /> */}
                <StyledSection id='home'>
                    <Home />
                </StyledSection>
                <StyledSection id='about'>
                    <About />
                </StyledSection >
                <StyledSection id='projects' >
                    <Projects />
                </StyledSection>
                <StyledSection id='contact' >
                    <Contact />
                </StyledSection>
                
                {/* <button className='button'
                        onClick={() => {
                            window.scrollTo({top: 0, left: 0})
                        }}>
                        Return to top
                </button> */}
            {/* </Layout> */}
            </StyledMainPage>
        </>
    )
}

export default MainPage