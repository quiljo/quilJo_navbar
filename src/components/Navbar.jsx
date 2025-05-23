import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  background: linear-gradient(to right, #ffe6f0, #ffccdd);
  color: #5a2a50;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(255, 192, 203, 0.3);
  border-bottom: 3px double #f9a6c2;
`;

const TopRow = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding-right: 0.5rem;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  font-family: 'Cursive', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
  color: #d63384;

  &::before {
    content: '🎀 ';
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    max-width: 60%;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 2rem;
  cursor: pointer;
  color: #d63384;

  @media (max-width: 768px) {
    display: block;
    padding-left: 0.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    background: linear-gradient(to bottom, #ffe6f0, #ffc0cb);
    position: absolute;
    top: 55px;
    left: 0;
    padding: 1rem 0;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border-radius: 20px;
  font-weight: 500;
  background-color: #fff0f5;
  color: #c2185b;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #ffcce0;
    transform: scale(1.05);
  }

  &::before {
    content: '🎀 ';
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Nav>
      <TopRow>
        <Logo onClick={() => handleNavClick('/mainlayout')}>quilJo</Logo>
        <Hamburger onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </Hamburger>
        <NavLinks open={open}>
          <NavItem onClick={() => handleNavClick('/mainlayout')}>Home</NavItem>
          <NavItem onClick={() => handleNavClick('/about')}>Me</NavItem>
          <NavItem onClick={() => handleNavClick('/contact')}>Rawr</NavItem>
        </NavLinks>
      </TopRow>
    </Nav>
  );
};

export default Navbar;