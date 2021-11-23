import React, { useState } from "react";
import { css } from '@emotion/react';
import { ReactComponent as VaultIcon }  from '../assets/vault.svg';
import { ReactComponent as EthDepositIcon }  from '../assets/ethDeposit.svg';
import { ReactComponent as WithdrawIcon }  from '../assets/withdrawIcon.svg';
import axios from 'axios';
import login from '../requests/PostAxios';

const LoginPageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }

  .square {
    background-color: transparent;
  }

`;

const LoginPage = () => {

    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      function validateForm() {
        return email.length > 0 && password.length > 0;
      }

      function handleSubmit(event) {
        event.preventDefault();
      }

  return (
  <div css={[LoginPageStyle]}>

  </div>
  );
};

export default LoginPage;
