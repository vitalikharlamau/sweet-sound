import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrap = styled.div`
  background: gray;
  padding: 2rem 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const Navigation = () => {
  return (
    <NavigationWrap>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/top-charts">Top Charts</NavLink>
      </Nav>
    </NavigationWrap>
  );
};
