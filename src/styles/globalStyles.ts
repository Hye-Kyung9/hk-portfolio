// src/styles/globalStyles.js
import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-ExtraLightItalic.ttf') format('truetype');
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Medium,.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Bold,.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-Black,.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
  }
  /* 기존 globalStyles의 내용 유지 */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
  }
`;

export default globalStyles;
