import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LeftSideMenu = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 15vw;
  height: 65vh;
  border-radius: 20px;
  background-color: #353b50;
  font-size: large;
  font-weight: bold;
  padding-left: 5rem;
  position: sticky;
  top: 70px;
  color: fff;
`;

export const ListMember = styled.div`
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  color: black;
  margin: 2rem 0px;
  /* Remove link styles */
  a {
    text-decoration: none;
  }
`;

export const PageContent = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  transition:
    color 0.2s ease,
    transform 0.2s ease;
  &:hover {
    cursor: pointer;
    color: #85e8ad;
  }
`;

export const UserPhoto = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const UsernameContainer = styled.span`
  font-size: large;
  font-weight: bold;
  margin-left: 2rem;
`;

export const RigthContainer = styled.label`
  width: 75vw;
  height: 100vh;
`;
