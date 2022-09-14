import { useEffect } from 'react';
import { Projects, Home, About, Navbar, Layout } from '../components';
import styled from 'styled-components';

const StyledMainPage = styled.main`
    
`;


const MainPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <>
            <StyledMainPage>
            {/* <Layout>            */}
                <Navbar />
                <div id='home'>
                    <Home />
                </div>
                <div id='about' >
                    <About />
                </div >
                <div id='projects' >
                    <Projects />
                </div>
                <div id='contact' >
                    <h1>
                        Contact
                    </h1>
                    <p>
                        My inbox is always open so feel free to get in touch!
                    </p>
                </div>
                
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