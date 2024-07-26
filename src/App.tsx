/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, Global } from '@emotion/react';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import globalStyles from './styles/globalStyles';

const appStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const mainStyles = css`
  flex: 1;
`;

const App = () => (
  <>
    <Global styles={globalStyles} />
    <div css={appStyles}>
      <Header />
      <main css={mainStyles}>
        <h1>안녕하세요!</h1>
        <p>나눔바른고딕 폰트 ag</p>
      </main>
      <Footer />
    </div>
  </>
);

export default App;
