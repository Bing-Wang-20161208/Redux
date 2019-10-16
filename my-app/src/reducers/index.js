//在实际的项目中，因为只有单一store，但是状态会有很多分类，所以需要划分reducer，
//但是createStore只接受一个reducer，所以redux提供了combineReducers方法来合并reducer，
//切记手动合并reducer
//数据初始化，一般就在reducer,index里面时综合多个reducer
import { combineReducers } from 'redux';    //合并多个reducer
//引入分类的reducer
import cart from './cart';
//导出合并后的reducers
export default combineReducers ({
    //把多个rducer作为参数传入combineReducers，在外部可以通过store.getState().cart来获取到cartReducer里面的state
    cart
})