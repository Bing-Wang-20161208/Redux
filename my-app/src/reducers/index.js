//数据初始化，一般就在reducer,index里面时综合多个reducer
import { combineReducers } from 'redux';    //合并多个reducer
import cart from './cart';

export default combineReducers ({
    cart
})