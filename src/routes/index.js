import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import getToken from './token/Tokens';
import setToken from './token/Tokens';

const HomePage = lazy(() => import('../pages/HomePage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const Routes = () => {

    const token = getToken();

    if(!token) {
        return <LoginPage setToken={setToken} />
      }

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

export default Routes;
