
import { useEffect } from 'react';
import { Projects, Home, About, Navbar } from '../components';


const MainPage = () => {

    // useEffect(() => {
    //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    //   }, []);

    return (
        <>
            <Navbar />
            <div id='home'>
                <Home />
            </div>
            <div id='about' className='section'>
                <About />
            </div >
            <div id='projects' className='section'>
                <Projects />
            </div>
            <div id='contact' className='section'>
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
            
            

        </>

    )
}

export default MainPage