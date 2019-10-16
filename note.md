1.redux设计原则：唯一数据源，状态为只读，数据的改变必须通过纯函数完成
2.npm -s(--save)    //dependencies用于发布到生产环境，例如react，redux等
    -d(--save-dev) //devdependencies只用于开发环境，例如编译，热加载，压缩代码等

3.手动连接Redux简述创建步骤:
    创建store.js引入redux
    ——创建reducers，actions文件夹
    ——reducers里面index引入combineReducers
    ——创建其他子reducer.js
    ——子reducer先定义初始数据，再导出默认方法，包含最简单的switch，默认返回state
    ——store引入reducers
    ——在需要渲染的地方引入store
    ——创建action，定义actionType
    ——创建action方法，一般用函数返回的方式，利于传参
    ——渲染组件使用store.dispatch(action方法)分发到对应需要更新的位置使用action改变状态
    ——子reducer处理actionType，写出需要如何改变
    ——渲染组件创建subscribe监听需要变化的state