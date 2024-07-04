// src/components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background: linear-gradient(
    to right,
    #d12f3d 60%,
    #333 60%
  ); /* 60% red background */
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>ExxonMobil</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#links">Useful links</NavLink>
        <NavLink href="#steps">Passo a Passo</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
