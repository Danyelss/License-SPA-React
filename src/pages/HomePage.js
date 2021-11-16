import React from 'react';
import { css } from '@emotion/react';

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
            <h1>Wallet</h1>
    </div>
    <div class="square slide-bottom">
        <h1>Deposit</h1>

    </div>
    <div class="square slide-bottom">
        <h1>Withdraw</h1>
    </div>

    </div>
  );
};

export default HomePage;
