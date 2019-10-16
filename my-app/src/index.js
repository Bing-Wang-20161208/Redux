import React from 'react';
import ReactDOM from 'react-dom';

//Provider 是react-redux提供的一种组件
import { Provider } from 'react-redux';

import APP from './App';
import store from './store';

// window.store = store;   //测试时使用

ReactDOM.render(
//一般直接把这个组件放在应用程序的最顶层，这个组件必须有一个store属性，这个store属性的值就是之前创建的store
//只要在最外层包裹了这个Provider，那么所有的后代组件都可以使用Redux.connect做连接，传递数据，无需层层传递
    <Provider store = { store }>
        <APP />
    </Provider>,
    document.querySelector("#root")
)
