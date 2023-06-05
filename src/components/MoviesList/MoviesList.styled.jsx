import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  background-color: #f2f2f2;
  padding: 8px;
  border-radius: 5px;

  font-weight: 500;
  font-size: 14px;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    background-color: #13573a5c;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  min-height: 105px;
  object-fit: cover;
  margin-bottom: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
