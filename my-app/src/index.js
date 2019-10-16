import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import APP from './App';
import store from './store';

// window.store = store;   //测试时使用

ReactDOM.render(
    <APP />,
    document.querySelector("#root")
)
