import React, { useState, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
 Navigate,
  Outlet,
  Redirect
} from "react-router-dom";

//import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import './styles/index.scss';

import useToken from './token/Tokens';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <ThemeProvider>
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    {/*<Route path="/" element={<LoginPage />} />*/}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/404" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                    <Route
                        path="/home"
                            element={
                                <PrivateRoute>
                                    <HomePage />
                                </PrivateRoute>
                                }
                            />
                </Routes>
            </AppLayout>

        </BrowserRouter>
    </ThemeProvider>
  );
}

function PrivateRoute({ children }) {

  const tokenFunction = useToken();


  const auth = true;
  //const auth = tokenFunction.getToken();
  console.log(auth);
  return auth ? children : <Navigate to="/login" />;
}
