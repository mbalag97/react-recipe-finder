import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/react-recipe-finder/recipe" activeStyle>
            Recipes
          </NavLink>
          <NavLink to="/react-recipe-finder/tic-tac" activeStyle>
            Games
          </NavLink>
          <NavLink to="/react-recipe-finder/ccp" activeStyle>
            CCP
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
