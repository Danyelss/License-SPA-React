import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as VaultIcon }  from '../svgs/vault.svg';
import { ReactComponent as EthDepositIcon }  from '../svgs/deposit.svg';
import { ReactComponent as WithdrawIcon }  from '../svgs/withdraw.svg';
//import WithdrawIcon  from '../svgs/test.png';
import axios from 'axios';
import login from '../requests/PostAxios';
import '../index.css';

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }

  .square {
    background-color: red;
  }

  .postItem img {
    width: 350px;
    height: 350px;
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>

    <h1>adsasda</h1>

    <Vault />

    <Deposit />

    <Withdraw />

    </div>
  );
};

function Vault () {
    return (
        <div className="square slide-bottom">
            <VaultIcon className="shadow" />
        </div>

    );
}

function Deposit () {
    return (
        <div className="shadow deposit slide-bottom">
            <EthDepositIcon className="shadow"/>
        </div>

    );
}

function Withdraw () {
    return (
        <div className="withdraw slide-bottom">
            <WithdrawIcon className="shadow"/>
        </div>

    );
}

export default HomePage;
