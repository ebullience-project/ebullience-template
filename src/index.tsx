import React from 'react';
import ReactDOM from 'react-dom';
import './test';

import style from './style/index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className={style.hello}>Hello, world!</div>
  </React.StrictMode>,
  document.getElementById('main')
);

// 启用热模块替换
// eslint-disable-next-line
// @ts-ignore
module.hot?.accept();
