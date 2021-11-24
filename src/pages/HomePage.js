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

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>

    <div class="square slide-bottom">
        <VaultIcon className="vaultLogo" onClick={login}/>
    </div>

    <div class="deposit slide-bottom">
        <EthDepositIcon className="depositLogo" onClick={login}/>
    </div>

    <div class="withdraw slide-bottom">
        <WithdrawIcon className="withdrawLogo" onClick={login}/>
    </div>

    </div>
  );
};


export default HomePage;
