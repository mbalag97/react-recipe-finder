import { FaBars } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#6616fc, #f394d3);
`;
export const LogoContainer = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(#6616fc, #f394d3);
`;

export const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: 400px) {
    flex-flow: column nowrap;
    background: green;
    position: fixed;
    transform: ${(props) =>
      props.open ? "translateX(0%)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: auto;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 20px 10px;
  @media (max-width: 400px) {
    color: white;
  }
`;

export const MobileButton = styled.div`
display:none;
@media (max-width: 400px) {
  display: flex;
  justify-content: space-between;
  transform-origin: 1px;
  transition: all 0.3s linear;
  z-index: 1;
}
`;
export const Bars = styled(FaBars)`
  display: flex;
  justify-content: space-around;
  font-size: 2rem;
  cursor: pointer;
`;
export const CloseArrow = styled(TiArrowRightThick)`
  display: flex;
  justify-content: space-around;
  font-size: 2.5rem;
  cursor: pointer;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
  @media (max-width: 648px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vw;
    padding: 30px 0px;
  }
`;
