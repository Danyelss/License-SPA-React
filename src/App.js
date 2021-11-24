import React, { useState, Suspense, lazy } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Link,
  Navigate,
  Outlet
} from "react-router-dom";

//import Routes from './routes';
import AppLayout from './layouts/AppLayout';
import ThemeProvider from './contexts/ThemeContext';
import './styles/index.scss';

const HomePage = lazy(() => import('./pages/HomePage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
/*
<ThemeProvider>
  <AppLayout>
 </AppLayout>
         </ThemeProvider>
         */
export default function App() {
  return (

    <BrowserRouter>
      <MyMenu />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private-outlet" element={<PrivateOutlet />}>
          <Route path="" element={<Private />} />
        </Route>
        <Route
          path="/private-nested"
          element={
            <PrivateRoute>
              <Private />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

const Public = () => <div>public</div>;
const Private = () => <div>private</div>;
const Login = () => <div>login</div>;

function PrivateOutlet() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/login" />;
}

function useAuth() {
  return true;
}

function MyMenu() {
  return (
    <nav>
      <Link to="/">Public</Link>
      {" | "}
      <Link to="/private-nested">Private Using Nested</Link>
      {" | "}
      <Link to="/private-outlet">Private Using Outlet</Link>
    </nav>
  );
}
