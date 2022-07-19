import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home'
import './Layout.scss';

const Layout = () => {
    return (
        <div className='container'>
            <Navbar />
            <section id='home' >
                <Home />
            </section>
            <section>
                <h1>
                    About
                </h1>
            </section>
            <section id='contact' >
                <h1 id='contact'>
                    Contact
                </h1>
            </section>

        </div>
    )
}

export default Layout