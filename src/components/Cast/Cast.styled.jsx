import styled from '@emotion/styled';

export const ActorImage = styled.img`
  max-width: 150px;
  height: auto;
  object-fit: cover;
`;

export const LinkList = styled.ul`
  display: grid;
  max-width: calc(150vw - 38px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
`;
export const Actor = styled.li`
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

export const Info = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.25;
`;
