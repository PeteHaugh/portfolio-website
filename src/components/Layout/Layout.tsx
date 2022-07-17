import Navbar from '../Navbar/Navbar';
import './Layout.scss';

const Layout = () => {
    return (
        <div className='container'>
            <Navbar />
            <section className='Page One'>
                <h1>
                    Home
                </h1>
            </section>
            <section>
                <h1>
                    About
                </h1>
            </section>
            <section className='Page Three'>
                <h1>
                    Experience
                </h1>
            </section>

        </div>
    )
}

export default Layout