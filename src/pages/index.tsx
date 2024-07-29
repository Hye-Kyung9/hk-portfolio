/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

const appStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const mainStyles = css`
  flex: 1;
`;

const index = () => {
  return (
    <div css={appStyles}>
      <Header />
      <main css={mainStyles}>
        <h1>안녕하세요!</h1>
        <p>나눔바른고딕 폰트 ag</p>
      </main>
      <Footer />
    </div>
  );
};

export default index;
