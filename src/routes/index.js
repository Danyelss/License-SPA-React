import React, { Suspense, lazy } from 'react';
import {    Switch,
            Route,
            BrowserRouter
        } from 'react-router-dom';

import getToken from '../token/Tokens';
import setToken from '../token/Tokens';

const HomePage = lazy(() => import('../pages/HomePage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

function PrivateRoute({ children }) {
  const auth = getToken(); /////////////////////////////////////////
  return auth ? children : <Navigate to="/login" />;
}

const Routes = () => {

  return (
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/private"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>

  );
};

/*
<Suspense fallback={<div />}>
      <Switch>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={(_) => <ErrorPage status={404} message="Page not found." />} />
      </Switch>
    </Suspense>
    */

export default Routes;
