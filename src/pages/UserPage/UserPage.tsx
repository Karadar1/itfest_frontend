import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//Material Ui imports
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router';
import {
  LeftSideMenu,
  ListMember,
  RigthContainer,
  UserPhoto,
  UsernameContainer,
  StyledLink,
  PageContent,
  // UsernameContainer
} from './UserPage.styled';
import AccountSettings from './pages/AccountSettings';
import MyPurchases from './pages/MyPurchases';
import { useEffect } from 'react';
import { PageContainer } from '../../components/PageContainer/PageContainer';

// Placeholder image

export const UserPage = () => {
  const userCirclePhoto = 'https://via.placeholder.com/150';
  const navigate = useNavigate();
  const userData = useContext(UserContext);

  console.log(userData?.user);

  useEffect(() => {}, []);

  const handleSignOut = () => {
    userData?.setUser(null);
    localStorage.token = '';
  };

  if (userData && userData.isAuthenticated) {
    return (
      <>
        <PageContainer>
          <Navbar />
          <PageContent>
            <LeftSideMenu>
              <UserPhoto>
                <AccountCircleSharpIcon
                  style={{ height: '70px', width: '70px', color: '#fff' }}
                />
                <UsernameContainer style={{ color: '#fff' }}>
                  Username: {userData.user?.username}{' '}
                </UsernameContainer>
              </UserPhoto>
              <ListMember>
                <StyledLink to="/user/settings">Account Settings</StyledLink>
              </ListMember>
              <ListMember>
                <StyledLink to="/login" onClick={() => handleSignOut()}>
                  Sign Out
                </StyledLink>
              </ListMember>
            </LeftSideMenu>
            <RigthContainer>
              <h2>Purchases History</h2>
            </RigthContainer>
          </PageContent>
        </PageContainer>
      </>
    );
  } else {
    return (
      <PageContainer>
        <div>Got to Login</div>;
      </PageContainer>
    );
  }
};

export default UserPage;
