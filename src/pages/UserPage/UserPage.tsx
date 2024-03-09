import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router';
import {
  LeftSideMenu,
  ListMember,
  ListMenu,
  RigthContainer,
  MainContainer,
  UserPhoto,
  UsernameContainer,
  RigthContainerMain,
  StyledLink,
  // UsernameContainer
} from './UserPage.styled';
import AccountSettings from './pages/AccountSettings';
import MyPurchases from './pages/MyPurchases';
import { Button } from '@mui/material';
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
        <Navbar />
        <PageContainer>
          <MainContainer>
            <LeftSideMenu>
              <UserPhoto>
                <img
                  src={userCirclePhoto}
                  style={{
                    borderRadius: '50%',
                    width: '110px',
                    height: '110px',
                  }}
                />
                <UsernameContainer>
                  Username: {userData.user?.username}{' '}
                </UsernameContainer>
              </UserPhoto>
              <ListMember>
                <StyledLink to="/user/settings">Account Settings</StyledLink>
              </ListMember>
              <ListMember>
                <StyledLink to="/user/purchases">Purchases</StyledLink>
              </ListMember>
              <ListMember>
                <StyledLink to="/login" onClick={() => handleSignOut()}>
                  Sign Out
                </StyledLink>
              </ListMember>
            </LeftSideMenu>
            <RigthContainer>
              <RigthContainerMain>
                <h1>Your last purchases</h1>
                <Button>See more</Button>
              </RigthContainerMain>
            </RigthContainer>
          </MainContainer>
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
