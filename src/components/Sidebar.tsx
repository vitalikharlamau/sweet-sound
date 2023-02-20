import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled.div`
  opacity: 0.8;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: gray;
  padding: 0 30px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Toggler = styled.button``;

export const Sidebar = ({ themeToggler }: any) => {
  return (
    <Box>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/top-charts">Top Charts</NavLink>
      </Nav>

      <Toggler onClick={themeToggler}>Toggle theme</Toggler>
    </Box>
  );
};
