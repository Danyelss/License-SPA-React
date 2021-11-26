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
                    <Route path="/about" element={<HomePage />} />
                    <Route path="/" element={<About />} />

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

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}

/*
<Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/404" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                    <Route
                        path="/home"
                            element={
                                <PrivateRoute>
                                    <HomePage />
                                </PrivateRoute>
                                }
                            />
                            */
