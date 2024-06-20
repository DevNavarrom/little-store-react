import { useState } from "react";
import NavbarItem from "./NavbarItem";
import "../styles/components/Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import appleIcon from '../assets/apple-whole-solid-teal.svg';
import addIcon from '../assets/plus-solid.svg';
import menuIcon from '../assets/bars-solid.svg';
import homeIcon from '../assets/house-solid.svg';
import Button from "./Button";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header bg-transparent">
            <div className="logo">
                <img className="glass" src={appleIcon} height={36} width={36} alt="Brand Logo" />
            </div>
            {location.pathname === '/admin' ? 
                <nav>
                    <ul className="nav-links">
                        <NavbarItem NavLink="/">
                            <Button text="Home" srcIcon={homeIcon}/>
                        </NavbarItem>
                    </ul>
                </nav>
            :
                <Link className="btn" to="/admin">
                    <Button text="Create" srcIcon={addIcon}/>
                </Link>
            }
            {/* <button className="btn rounded-25 bg-primary p-1 no-border pointer flex justify-center items-center">
                <img src={cartIcon} width={16} height={16} alt="Cart Icon" />
            </button> */}
            
            <a onClick={toggleMenu} className="menu" href="#">
                <button>
                    <img src={menuIcon} width={20} height={20} alt="Menu Icon" />
                </button>
            </a>
            <div id="mobile-menu" className={`overlay ${isOpen ? 'overlay--open':''}`}>
                <a onClick={toggleMenu} href="" className="btn-close">
                    ×
                </a>
                <div className="overlay-content">
                    <Link onClick={toggleMenu} to="/">Products</Link>
                    <Link onClick={toggleMenu} to="/cart">Cart</Link>
                    <Link onClick={toggleMenu} to="/admin">Admin</Link>
                </div>
            </div>
        </header>

    )
}

export default Navbar;