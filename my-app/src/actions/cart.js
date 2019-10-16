import actionType from './actionType';

//action有两种写法
//第一种，写成一个对象，这是标准模式，但是不方便传递动态参数，如果需要，只能写死在里面
// export const increment = {
//     type : actionType.CART_AMOUNT_INCREMENT
// }
//第二种，工作中常用的方式，actionCreator，他是一个方法，返回一个对象，这个对象就是action，便于传递动态参数
export const increment = (id) => {
    // console.log(id);
    return {
        type : actionType.CART_AMOUNT_INCREMENT,
        payload : {
            id
        }
    }
}

export const decrement = (id) => {
    // console.log(id);
    return {
        type : actionType.CART_AMOUNT_DECREMENT,
        payload : {
            id
        }
    }
}