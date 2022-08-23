import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import './Layout.scss';


const Layout = () => {



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
            </div >
            <div id='experience' className='section'>
                <h1>
                    Experience
                </h1>
            </div>
            <div id='projects' className='section'>
                <h1>
                    Projects
                </h1>
            </div>
            <div id='contact' className='section'>
                <h1>
                    Contact
                </h1>
            </div>
            
            

        </div>
    )
}

export default Layout