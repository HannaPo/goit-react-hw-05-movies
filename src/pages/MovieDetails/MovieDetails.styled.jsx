import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #13573a5c;
  padding: 15px;
  border-radius: 5px;
  gap: 25px;
`;

export const MovieImage = styled.img`
  min-width: 200px;
  height: auto;
  object-fit: cover;
`;
export const StyledLink = styled(Link)`
  display: inline-block;
  margin: 15px 0;
  padding: 8px;
  font-weight: 700;
  border-radius: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  color: #ffffff;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 32px;
  `;

export const SubTitle = styled.h3`
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const Info = styled.p`
  margin-top: 28px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  
  text-transform: uppercase;
`;
