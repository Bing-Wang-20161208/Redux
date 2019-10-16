import actionType from '../actions/actionType';

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
export default (state = initState, action) => {
    // console.log(action); //redux缺点，action变一次，所有reducer都会收到
    
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
                    item.amount -= 1;
                }
                return item;
            })
        default :
            return state;
    }
}