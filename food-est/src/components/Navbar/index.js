// reference: https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/

import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Additional Resources
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;