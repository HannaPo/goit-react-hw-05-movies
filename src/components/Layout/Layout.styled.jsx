import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Navbar = styled.nav`
  padding: 10px;
  font-size: 22px;
  display: flex;
  justify-content: flex-start;
`;
export const NavigationLink = styled(NavLink)`
  color: #fff;
  margin-right: 15px;
  
  :hover,
  :focus {
    text-decoration: underline;
    text-underline-offset: 5px;}

  &.active {
    font-weight: bold;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  padding: 10px;
  z-index: 2;
  background-color: #13573a5c;
  border-radius: 5px;
`;
