//为了避免actionType重复，一般会把actionType放在一个文件统一管理，同时避免写错actionType
import actionType from '../actions/actionType';

//对于购物车来说，这里有一个初始化状态
const initState = [
    {
        id : 1,
        title : 'APPLE',
        price : 10000,
        amount : 10
    },{
        id : 2,
        title : 'HUAWEI',
        price : 6000,
        amount : 1
    }
];
//创建购物车的reducer，reducer固定写法：两个参数（state必有初始值，action）
export default (state = initState, action) => {
    // console.log(action); //redux缺点，action变一次，所有reducer都会收到
//根据不同actionType做不同的处理，每次返回一个新的state，返回的类型必须是一样的
    switch (action.type) {
        case actionType.CART_AMOUNT_INCREMENT : 
            return state.map( item => {
                if ( item.id === action.payload.id ) {
                    item.amount += 1;
                }
                return item;
            });
        case actionType.CART_AMOUNT_DECREMENT : 
            return state.map( item => {
                if ( item.id === action.payload.id ) {
                    if ( item.amount > 0 ) {
                        item.amount -= 1;
                    } else {
                        item.amount = 0;
                    }
                }
                return item;
            })
//一定要有default，当actionT不对时，不做任何处理，返回上一次的state
        default :
            return state;
    }
}