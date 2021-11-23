import React, { useState } from 'react';

import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import LoginPage from './pages/LoginPage';
import './styles/index.scss';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
    const token = getToken();

    if(!token) {
        return <LoginPage setToken={setToken} />
      }

  return (
    <ThemeProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
