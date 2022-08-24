import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import './Layout.scss';
import { useEffect } from 'react';
import Projects from '../Projects/Projects';


const Layout = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
        <div className='container'>
            <Navbar />
            <div id='home' className='section'>
                <Home />
                
            </div>
            <div id='about'className='section'>
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
            </div>
            
            <button className='button'
                    onClick={() => {
                        window.scrollTo({top: 0, left: 0})
                    }}>
            </button>
            
            

        </div>

    )
}

export default Layout