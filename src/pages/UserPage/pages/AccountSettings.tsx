import React, { useState } from 'react';
import { FormCard, InputBox } from '../../SignUp/SignUp.styled';
import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Button } from '@mui/material';
import axios from 'axios';
import axiosInstance from '../../../api/axiosInstance';
import { PageContainer } from 'src/components/PageContainer/PageContainer';
import styled from '@emotion/styled';
import Navbar from 'src/components/Navbar/Navbar';

export default function AccountSettings() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const userData = useContext(UserContext);

  const handleSubmit = async () => {
    const updatedUser = {
      username,
      email,
      phoneNumber,
    };

    try {
      // const response = await axios.put('http://localhost:3010/api/users/profile',, updatedUser);
      const response = await axiosInstance.put('/users/profile', updatedUser);
      console.log('User updated successfully:', response);
      console.log(response);
      // userData?.setUser(response);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const renderInput = (inputCase: string) => {
    switch (inputCase) {
      case 'username': {
        return (
          <InputBox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(event.target.value)
            }
            placeholder="New Username"
            type="string"
          />
        );
      }
      case 'email': {
        return (
          <InputBox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
            placeholder="New Email"
            type="text"
          />
        );
      }
      case 'phoneNumber': {
        return (
          <InputBox
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPhoneNumber(event.target.value)
            }
            placeholder="New Phone Number"
            type="text"
          />
        );
      }
      default: {
        return null;
      }
    }
  };
  console.log(userData);
  const Title = styled.h1`
    font-size: 28px; /* Adjust the size as needed */
    color: #fff; /* This is a dark gray, but customize the color as you like */
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px; /* Adds space below the title */
    padding: 0 10px; /* Ensures the title has some padding on smaller screens */
  `;
  const FormCardEdit = styled.div`
    font-family: 'Montserrat', sans-serif;
    padding: 2rem 0;
    margin: auto;
    width: 100%;
    min-height: 35rem;
    max-width: 25rem;
    background-color: #494949;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1.5625rem;
  `;

  return (
    <PageContainer>
      <Navbar />
      {userData && userData.isAuthenticated && (
        <>
          <div>Settings</div>
          <FormCardEdit>
            <Title> Change you credentials</Title>
            <div className="InputWrapper">{renderInput('username')}</div>
            <div className="InputWrapper">{renderInput('email')}</div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleSubmit();
              }}
            >
              Confirm
            </Button>
          </FormCardEdit>
        </>
      )}
    </PageContainer>
  );
}
