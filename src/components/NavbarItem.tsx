import { Link } from "react-router-dom";

interface NavbarItemProps {
    NavLink: string;
    children: React.ReactNode
}

const NavbarItem: React.FC<NavbarItemProps> = ({ children, NavLink }) => {
    return (
      <>
        <li>
          <Link to={NavLink}>
            {children}
          </Link>
        </li>
      </>
    );
  };

export default NavbarItem;