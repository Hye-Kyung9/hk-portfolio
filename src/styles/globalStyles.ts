import { css } from '@emotion/react';

const globalStyles = css`
  @import url('https://hangeul.pstatic.net/hangeul_static/css/nanum-barun-gothic.css');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Nanum Barun Gothic', sans-serif;
    padding: 0;
    margin: 0;
    height: 100%;
  }
`;

export default globalStyles;
