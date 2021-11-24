import React, { useState } from 'react';

import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import LoginPage from './pages/LoginPage';
import './styles/index.scss';
import getToken from './token/Tokens';
import setToken from './token/Tokens';

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
