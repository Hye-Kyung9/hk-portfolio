/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import globalStyles from './styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/index';
import ProjectList from './pages/projects/ProjectList';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

const appStyles = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const contentStyles = css`
  flex: 1;
`;

const App = () => (
  <>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <div css={appStyles}>
        <Header />
        <main css={contentStyles}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </>
);

export default App;
