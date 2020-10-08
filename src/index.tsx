import React from 'react';
import ReactDOM from 'react-dom';

import style from './style/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className={style.hello}>Hello, world!</div>
  </React.StrictMode>,
  document.querySelector('body')
);
