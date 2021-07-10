import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

import styled from "styled-components";

import { Container } from "../../GlobalStyles";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #46637c;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15%;
  padding-right: 15%;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;

  font-size: 2rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin: -20px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  position: sticky;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-300%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #e7b158;
  }
`;

const NavItem = styled.li`
  color: #f2f2f2;

  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: #5dbee9;
    border-radius: 4px;
    transform: scale(1.1);
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 0rem 1rem;
  transition: all 0.3s ease-out;
  height: 100%;
  &:hover {
    font-size: calc(16px * 1.5);
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

const SocialIcons = styled.ul`
  display: none;
  @media screen and (max-width: 960px) {
    margin: 1rem 1rem;
    display: flex;
    justify-content: left;
    flex-direction: row;
    align-items: left;
  }
`;

const SocialItem = styled.a`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    margin: 2rem 1rem;
    color: #f2f2f2;
    font-size: 34px;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              Anthony M
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
              <SocialIcons>
                <SocialItem href="http://github.com/MrAjMann">
                  {" "}
                  <FaGithub />{" "}
                </SocialItem>
                <SocialItem href="https://twitter.com/MyCodingJourne3">
                  {" "}
                  <FaTwitter />{" "}
                </SocialItem>
                <SocialItem href="https://www.linkedin.com/in/anthonyjmann87/">
                  {" "}
                  <FaLinkedin />{" "}
                </SocialItem>
              </SocialIcons>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
