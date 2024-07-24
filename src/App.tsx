import Header from './components/layouts/Header';
import globalStyles from './styles/globalStyles';
import { Global } from '@emotion/react';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <div>
      <Header />
      <h1>안녕하세요!</h1>
      <p>나눔바른고딕 폰트 ag</p>
    </div>
  </>
);

export default App;
