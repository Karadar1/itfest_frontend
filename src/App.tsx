import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import RentBike from './pages/RentBike/RentBike';
import { UserPage } from './pages/UserPage/UserPage';
import ProductPage from './pages/ProductPage/ProductPage';
import UserSettings from './pages/UserPage/pages/AccountSettings';
import UserPurchases from './pages/UserPage/pages/MyPurchases';
import { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle
import AdminPage from './pages/AdminPage/AdminPage';
import Footer from './components/Footer/Footer';
import { PageContainer } from './pages/HomePage/HomePage.styled';
import Navbar from './components/Navbar/Navbar';

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Roboto', sans-serif;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/rent" element={<RentBike />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/user/settings" element={<UserSettings />} />
        <Route path="/user/purchases" element={<UserPurchases />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
