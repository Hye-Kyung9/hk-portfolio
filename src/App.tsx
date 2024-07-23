import globalStyles from "./style/globalStyles";
import { Global } from '@emotion/react';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <div>
      <h1>안녕하세요! abcd</h1>
      <p>나눔바른고딕 폰트 abcdefg</p>
    </div>
  </>
);

export default App;
