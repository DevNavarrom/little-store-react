import { useState } from "react";
import NavbarItem from "./NavbarItem";
import "../styles/components/Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import appleIcon from '../assets/apple-whole-solid-teal.svg';
import addIcon from '../assets/plus-solid.svg';
import menuIcon from '../assets/bars-solid.svg';
import homeIcon from '../assets/house-solid.svg';
import closeIcon from '../assets/xmark-solid.svg';
import Button from "./Button";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header bg-transparent">
            <Link to="/" className="logo">
                <img className="glass" src={appleIcon} height={36} width={36} alt="Brand Logo" />
            </Link>
            {location.pathname === '/admin' ? 
                <nav>
                    <ul className="nav-links">
                        <NavbarItem NavLink="/">
                            <Button label="Home" srcIcon={homeIcon}/>
                        </NavbarItem>
                    </ul>
                </nav>
            :
                <Link className="btn" to="/admin">
                    <Button label="Create" srcIcon={addIcon}/>
                </Link>
            }
            
            <div onClick={toggleMenu} className="menu">
                <Button srcIcon={menuIcon} onClick={toggleMenu} className="menu" text rounded />
            </div>
            
            <div id="mobile-menu" className={`overlay ${isOpen ? 'overlay--open':''}`}>
                <div className="btn-close">
                    <Button onClick={toggleMenu} srcIcon={closeIcon} text rounded />
                </div>
                <div className="overlay-content">
                    <Link onClick={toggleMenu} to="/">Catalog</Link>
                    <Link onClick={toggleMenu} to="/admin">Add Product</Link>
                </div>
            </div>
        </header>

    )
}

export default Navbar;