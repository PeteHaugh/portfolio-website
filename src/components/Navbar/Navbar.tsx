import { useState } from 'react';
import './Navbar.scss';
import { NavItems } from './NavItems';

const Navbar = () => {
    const [clicked, setClicked] = useState(false)


    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>P Logo</h1>
            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "ph-x" : "ph-list"}></i>

            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {NavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.className} href={item.url}>
                            {item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar