import React, { Suspense, lazy } from 'react';
import {    Switch,
            Route,
            //Switch,
            BrowserRouter
        } from 'react-router-dom';

//import getToken from '../token/Tokens';
//import setToken from '../token/Tokens';

const HomePage = lazy(() => import('../pages/HomePage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

const Routes = () => {

  return (
    <Suspense fallback={<div />}>
        <Switch>
            <Route exact path="/home" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={(_) => <ErrorPage status={404} message="Page not found." />} />
        </Switch>
    </Suspense>
  );
};

/*
    <BrowserRouter>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/home"
                  element={
                    <PrivateRoute>
                      <HomePage />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
    */

export default Routes;
