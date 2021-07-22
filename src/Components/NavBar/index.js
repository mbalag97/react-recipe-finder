import React, { useState } from "react";
import {
  LogoContainer,
  Nav,
  NavLink,
  MobileButton,
  Bars,
  CloseArrow,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  const handleMobileMenuClick = (event) => {
    setClick(!click);
  };
  return (
    <Nav>
      <div>Logo</div>
        <NavMenu open={click}>
          <NavLink
            to="/react-recipe-finder/recipe"
            onClick={closeMobileMenu}
            activeStyle
          >
            Recipes
          </NavLink>
          <NavLink
            to="/react-recipe-finder/tic-tac"
            onClick={closeMobileMenu}
            activeStyle
          >
            Games
          </NavLink>
          {/* <NavLink to="/react-recipe-finder/ccp" activeStyle>
            CCP
          </NavLink> */}
          <NavLink
            to="/react-recipe-finder/weather"
            onClick={closeMobileMenu}
            activeStyle
          >
            Weather
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/react-recipe-finder/weather'>Sign In</NavBtnLink> */}

          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NavMenu>
        <MobileButton>
          {click ? (
            <CloseArrow onClick={handleMobileMenuClick} />
          ) : (
            <Bars onClick={handleMobileMenuClick} />
          )}
        </MobileButton>
    </Nav>
  );
};

export default Navbar;
