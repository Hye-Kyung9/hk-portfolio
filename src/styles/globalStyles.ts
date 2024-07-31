import { css } from '@emotion/react';

const globalStyles = css`
  @import url('https://hangeul.pstatic.net/hangeul_static/css/nanum-barun-gothic.css');
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  body {
    font-family: 'Nanum Barun Gothic', sans-serif;
    padding: 0;
    margin: 0;
    /* height: 100vh; */
  }
`;

export default globalStyles;
