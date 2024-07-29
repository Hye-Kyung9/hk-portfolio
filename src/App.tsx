/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/index';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
