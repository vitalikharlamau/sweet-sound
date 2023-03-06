import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Sidebar = ({ themeToggler }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuSwitcher = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <Box>
      <Switcher onClick={menuSwitcher}>Menu</Switcher>

      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/top-charts">Top Charts</NavLink>
      </Nav>

      <Toggler onClick={themeToggler}>Toggle theme</Toggler>
    </Box>
  );
};

const Box = styled.div`
  width: 200px;
  background: gray;
  padding: 0 20px;
`;

const Switcher = styled.button``;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Toggler = styled.button``;
