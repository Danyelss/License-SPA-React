import React from 'react';
import { css } from '@emotion/react';

const HomePageStyle = css`
  h1 {
    font-size: 5rem;
    font-weight: 600;
    text-align: center;
  }
`;

const HomePage = () => {
  return (
    <div css={[HomePageStyle]}>

    <div class="square slide-bottom">
            <h1>Wallet</h1>
    </div>
    <div class="square slide-bottom">
        <h1>asa</h1>

    </div>
    <div class="square slide-bottom">
        <h1>asa</h1>
    </div>

    </div>
  );
};

export default HomePage;
