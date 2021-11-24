import React, { useState } from "react";
import { css } from '@emotion/react';
import { ReactComponent as VaultIcon }  from '../assets/vault.svg';
import { ReactComponent as EthDepositIcon }  from '../assets/ethDeposit.svg';
import { ReactComponent as WithdrawIcon }  from '../assets/withdrawIcon.svg';
import login from '../requests/PostAxios';
import PropTypes from 'prop-types';
import {setToken} from '../token/Tokens';

const LoginPageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }

  .login-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

`;

async function loginUser(credentials) {
 return fetch('http://localhost:8082/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function LoginPage({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });

      console.log(token.token);

      setToken.setToken(token.token);
    }

  return(
  <div css={[LoginPageStyle]}>
    <div className="login-wrapper square">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
};