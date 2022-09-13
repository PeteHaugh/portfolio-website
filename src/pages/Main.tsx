import Navbar from '../components/Navbar';
import Home from '../components/Home'
import './Layout.scss';
import { useEffect } from 'react';
import Projects from '../components/Projects';


const Main = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <div className='container'>
            <Navbar />
            <div id='home' className='section'>
                <Home />
                
            </div>
            <div id='about' className='section'>
                <h1>
                    About
                </h1>
                <p>Hello! I'm Pete, a mechanical engineer turned software engineer</p>
            </div >
            <div id='experience' className='section'>
                <h1>
                    Experience
                </h1>
            </div>
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
                <button></button>
            </div>
            
            <button className='button'
                    onClick={() => {
                        window.scrollTo({top: 0, left: 0})
                    }}>
                    Return to top
            </button>
            
            

        </div>

    )
}

export default Main