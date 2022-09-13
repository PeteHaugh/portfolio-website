import { useState } from 'react';
import './Navbar.scss';
import { NavItems } from '../utils/NavItems';
import useTheme from '../hooks/useTheme';
import useDirection from '../hooks/useScroll';

const Navbar = () => {

    const [clicked, setClicked] = useState(false)
    const { onToggleTheme, isDarkTheme } = useTheme();
    const scrollDirection = useDirection();

    return (
        <nav className={scrollDirection === "down" ? "Navbar--hidden" : "Navbar"}>
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
            <button
                    onClick={onToggleTheme}
                    >
                    {isDarkTheme ? "Light" : "Dark"}
            </button>
        </nav>
    )
}

export default Navbar