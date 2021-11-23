import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as VaultIcon }  from '../assets/vault.svg';
import { ReactComponent as EthDepositIcon }  from '../assets/ethDeposit.svg';
import { ReactComponent as WithdrawIcon }  from '../assets/withdrawIcon.svg';
import axios from 'axios';
import login from '../requests/PostAxios';

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }

  .square {
    background-color: transparent;
  }
`;

const api = axios.create({
    baseURL: 'http://localhost:8081/'
})

const HomePage = () => {
    login();

  return (
    <div css={[HomePageStyle]}>

    <div class="square slide-bottom">
        <VaultIcon class="vaultLogo" onClick={login}/>
    </div>

    <div class="deposit slide-bottom">
        <EthDepositIcon class="depositLogo" onClick={login}/>
    </div>

    <div class="withdraw slide-bottom">
        <WithdrawIcon class="withdrawLogo" onClick={login}/>
    </div>

    </div>
  );
};


export default HomePage;
